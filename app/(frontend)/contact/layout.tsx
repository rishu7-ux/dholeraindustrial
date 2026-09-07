import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dholera Industrial Plot | Site Visits & Enquiries",
  description:
    "Get in touch for industrial plot enquiries, pricing and site visits in Dholera SIR. Call +91 92171 04219 or visit our Noida office.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
