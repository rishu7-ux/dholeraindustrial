import Link from "next/link";

const linkStyle = {
  display: "block",
  margin: "0 12px 12px",
  padding: "10px 12px",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: 600,
  textDecoration: "none",
};

export default function IndustrialNavLink() {
  return <>
    <Link href="/admin/industrial-dashboard" style={{ ...linkStyle, background: "linear-gradient(90deg,#12568d,#4385b4)" }}>
      Dholera Industrial Dashboard
    </Link>
    <Link href="/admin/collections/dholera-estates-blogs" style={{ ...linkStyle, background: "linear-gradient(90deg,#173f6d,#2f65a7)" }}>
      Dholera Estates Blogs
    </Link>
  </>;
}
