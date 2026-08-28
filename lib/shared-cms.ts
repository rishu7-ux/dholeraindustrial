import "server-only";

export type IndustrialLead =
  | {
      type: "enquiry";
      name: string;
      email: string;
      phone: string;
      property: string;
      message: string;
      source:
        | "industrial-popup-form"
        | "industrial-side-enquiry-form"
        | "industrial-property-card"
        | "industrial-website";
    }
  | {
      type: "contact";
      name: string;
      email: string;
      phone: string;
      propertyType:
        | "industrial-plot"
        | "logistics-plot"
        | "warehouse-land"
        | "commercial-plot";
      budget:
        | "below-25-lakhs"
        | "25-50-lakhs"
        | "50-lakhs-1-crore"
        | "above-1-crore";
      comments: string;
      consent: true;
      source: "industrial-contact-us-page";
    };

type CmsResponse = { success?: boolean; message?: string };

export class SharedCmsError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
  }
}

export async function submitIndustrialLead(lead: IndustrialLead) {
  const cmsUrl = process.env.PAYLOAD_CMS_URL?.replace(/\/$/, "");
  const ingestSecret = process.env.INDUSTRIAL_INGEST_SECRET;

  if (!cmsUrl || !ingestSecret) {
    throw new SharedCmsError("Lead service is not configured", 500);
  }

  try {
    const response = await fetch(`${cmsUrl}/api/industrial-leads`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ingestSecret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const result = (await response.json().catch(() => ({}))) as CmsResponse;

    if (!response.ok) {
      const status = response.status === 400 ? 400 : 502;
      throw new SharedCmsError(
        status === 400
          ? result.message || "Invalid submission"
          : "Lead service is temporarily unavailable",
        status,
      );
    }

    return result;
  } catch (error) {
    if (error instanceof SharedCmsError) throw error;

    const timedOut =
      error instanceof DOMException && error.name === "TimeoutError";
    throw new SharedCmsError(
      timedOut
        ? "Lead service timed out. Please try again."
        : "Lead service is temporarily unavailable",
      timedOut ? 504 : 502,
    );
  }
}
