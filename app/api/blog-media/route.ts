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

    const response = await fetch(mediaUrl, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8_000),
    });
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
