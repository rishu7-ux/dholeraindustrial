import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samridhi 872/2 Industrial Plot | 70m & 48m Roads, Dholera SIR",
  description:
    "Government-registered industrial plot near the Expressway, Metro and Freight Corridor. 70m main road, 48m secondary road, sustainable design.",
  alternates: {
    canonical: "/samridhi-872-2-industrial-plots",
  },
};

export default function Samridhi8722Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
