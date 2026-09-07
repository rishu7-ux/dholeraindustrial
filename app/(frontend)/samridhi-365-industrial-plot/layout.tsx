import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samridhi 365 Industrial Plot | Near Tata Semiconductor, Dholera SIR",
  description:
    "Industrial plot near the Expressway, Metro and Tata Semiconductor Plant in Dholera SIR. 500m from expressway, tree-lined green infrastructure.",
  alternates: {
    canonical: "/samridhi-365-industrial-plot",
  },
};

export default function Samridhi365Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
