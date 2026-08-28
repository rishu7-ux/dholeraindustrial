import { z } from "zod";
import {
  SharedCmsError,
  submitIndustrialLead,
} from "../../../lib/shared-cms";

const enquiry = z.object({ type: z.literal("enquiry"), name: z.string().trim().min(3).max(80), email: z.string().trim().email(), phone: z.string().trim().regex(/^[6-9]\d{9}$/), property: z.string().trim().min(1).max(160), message: z.string().trim().max(500).default(""), source: z.enum(["industrial-popup-form", "industrial-side-enquiry-form", "industrial-property-card", "industrial-website"]) });
const contact = z.object({ type: z.literal("contact"), name: z.string().trim().min(3).max(80), email: z.string().trim().email(), phone: z.string().trim().regex(/^[6-9]\d{9}$/), propertyType: z.enum(["industrial-plot", "logistics-plot", "warehouse-land", "commercial-plot"]), budget: z.enum(["below-25-lakhs", "25-50-lakhs", "50-lakhs-1-crore", "above-1-crore"]), comments: z.string().trim().max(500).default(""), consent: z.literal(true), source: z.literal("industrial-contact-us-page") });
const schema = z.discriminatedUnion("type", [enquiry, contact]);

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json().catch(() => null));
    if (!parsed.success) return Response.json({ success: false, message: "Please check the submitted details" }, { status: 400 });
    await submitIndustrialLead(parsed.data);
    return Response.json({ success: true, message: "Enquiry saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Industrial lead could not be saved", error);
    const status = error instanceof SharedCmsError ? error.status : 500;
    const message = error instanceof SharedCmsError
      ? error.message
      : "Unable to submit right now. Please try again.";
    return Response.json({ success: false, message }, { status });
  }
}
