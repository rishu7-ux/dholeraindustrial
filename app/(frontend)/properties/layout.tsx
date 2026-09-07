import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial & Logistics Plots in Dholera SIR | Omana Projects",
  description:
    "Browse industrial, logistics and mixed-use plots across Dholera SIR — Samridhi 621, Samridhi 365, Samridhi 872/2 and Sandhida 191.",
  alternates: {
    canonical: "/properties",
  },
};

export default function PropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
