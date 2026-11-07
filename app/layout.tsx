
// import type { Metadata } from "next";
// import "./globals.css";
// import SiteShell from "@/components/layout/SiteShell";

// export const metadata: Metadata = {
//   title: "HomeTrust",
//   description: "Find your perfect property with HomeTrust.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <SiteShell>{children}</SiteShell>
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "HomeTrust",
  description: "Find your perfect property with HomeTrust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
