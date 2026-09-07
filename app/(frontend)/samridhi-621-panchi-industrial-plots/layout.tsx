import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samridhi 621 Panchi Industrial Plots | Dholera SIR, TP-4/B2",
  description:
    "Industrial plots in Bhangadh, Dholera SIR — next to the High Access Corridor, 1 km from Tata Semiconductor. 1318–1882 sq. yd., 48m road. From ₹85 Lakhs.",
  alternates: {
    canonical: "/samridhi-621-panchi-industrial-plots",
  },
};

export default function Samridhi621Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
