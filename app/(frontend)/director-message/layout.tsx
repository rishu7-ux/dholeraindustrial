import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | Omana Projects Dholera",
  description:
    "Meet the directors and leadership behind Omana Projects' industrial, residential and township developments across Dholera and beyond.",
  alternates: {
    canonical: "/director-message",
  },
};

export default function DirectorMessageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
