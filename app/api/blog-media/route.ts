export async function GET(request: Request) {
  const cmsUrl = process.env.PAYLOAD_CMS_URL?.replace(/\/$/, "");
  const path = new URL(request.url).searchParams.get("path");

  if (!cmsUrl || !path) return new Response("Not found", { status: 404 });

  try {
    const mediaUrl = new URL(path, `${cmsUrl}/`);
    if (
      mediaUrl.origin !== new URL(cmsUrl).origin ||
      !mediaUrl.pathname.startsWith("/api/media/file/")
    ) {
      return new Response("Not found", { status: 404 });
    }

    let response = await fetch(mediaUrl, {
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    // Payload can retain a numbered duplicate filename in the media record
    // even when the stored file is still available under the original name.
    // Retry that original filename before reporting a missing image.
    if (!response.ok) {
      const fallbackPath = mediaUrl.pathname.replace(
        /-(\d+)(\.[^/.]+)$/,
        "$2",
      );
      if (fallbackPath !== mediaUrl.pathname) {
        response = await fetch(new URL(fallbackPath, mediaUrl.origin), {
          cache: "no-store",
          signal: AbortSignal.timeout(8_000),
        });
      }
    }

    if (!response.ok || !response.body) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/jpeg",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
