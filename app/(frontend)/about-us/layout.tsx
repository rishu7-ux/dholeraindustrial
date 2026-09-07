import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dholera Industrial Plot | Omana Projects",
  description:
    "Dholera Industrial Plot, a subsidiary of Omana Projects, provides verified industrial land solutions in Dholera SIR since 2024.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
