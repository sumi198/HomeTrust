// import type { Metadata } from "next";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: {
//     default: "HomeTrust | Find Your Dream Property",
//     template: "%s | HomeTrust",
//   },
//   description:
//     "Buy, rent and discover properties with HomeTrust. Find your perfect home.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }







import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HomeTrust | Find Your Dream Property",
    template: "%s | HomeTrust",
  },
  description:
    "Buy, rent and discover properties with HomeTrust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileNavigation />
      </body>
    </html>
  );
}
