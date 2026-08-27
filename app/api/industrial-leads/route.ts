import { getPayload } from "payload";
import { z } from "zod";
import config from "../../../payload.config";

const enquiry = z.object({ type: z.literal("enquiry"), name: z.string().trim().min(3).max(80), email: z.string().trim().email(), phone: z.string().trim().regex(/^[6-9]\d{9}$/), property: z.string().trim().min(1).max(160), message: z.string().trim().max(500).default(""), source: z.enum(["industrial-popup-form", "industrial-side-enquiry-form", "industrial-property-card", "industrial-website"]) });
const contact = z.object({ type: z.literal("contact"), name: z.string().trim().min(3).max(80), email: z.string().trim().email(), phone: z.string().trim().regex(/^[6-9]\d{9}$/), propertyType: z.enum(["industrial-plot", "logistics-plot", "warehouse-land", "commercial-plot"]), budget: z.enum(["below-25-lakhs", "25-50-lakhs", "50-lakhs-1-crore", "above-1-crore"]), comments: z.string().trim().max(500).default(""), consent: z.literal(true), source: z.literal("industrial-contact-us-page") });
const schema = z.discriminatedUnion("type", [enquiry, contact]);

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json().catch(() => null));
    if (!parsed.success) return Response.json({ success: false, message: "Please check the submitted details" }, { status: 400 });
    const payload = await getPayload({ config });
    const data = parsed.data;
    if (data.type === "enquiry") {
      await payload.create({ collection: "industrial-enquiries", data: { name: data.name, email: data.email.toLowerCase(), phone: data.phone, property: data.property, message: data.message, source: data.source, status: "new" } });
    } else {
      await payload.create({ collection: "industrial-contact-messages", data: { name: data.name, email: data.email.toLowerCase(), phone: data.phone, propertyType: data.propertyType, budget: data.budget, comments: data.comments, consent: data.consent, source: data.source, status: "new" } });
    }
    return Response.json({ success: true, message: "Enquiry saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Industrial lead could not be saved", error);
    return Response.json({ success: false, message: "Unable to submit right now. Please try again." }, { status: 500 });
  }
}
