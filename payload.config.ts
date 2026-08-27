import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { DholeraEstatesBlogs, IndustrialBlogs, IndustrialContactMessages, IndustrialEnquiries, Media, Users } from "./collections/IndustrialCMS";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({ url: process.env.MONGODB_URI || "" }),
  admin: {
    user: Users.slug,
    components: {
      beforeNavLinks: ["/components/admin/IndustrialNavLink.tsx#default"],
      views: {
        industrialDashboard: {
          Component: "/components/admin/IndustrialDashboard.tsx#default",
          path: "/industrial-dashboard",
          exact: true,
          meta: { title: "Dholera Industrial Dashboard" },
        },
      },
    },
  },
  collections: [Users, IndustrialEnquiries, IndustrialContactMessages, Media, IndustrialBlogs, DholeraEstatesBlogs],
});
