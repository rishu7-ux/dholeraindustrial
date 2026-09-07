import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandhida 191 Logistic Plot | TP-3, Dholera SIR",
  description:
    "Logistics plot at TP-3 A, Dholera SIR. 1000–1500 sq. yd., 55m road width, ideal for warehousing & distribution. From ₹15,000/sq. yd.",
  alternates: {
    canonical: "/sandhida-191-logistic-plot",
  },
};

export default function Sandhida191Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
