
import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HomeTrust - Buy, Sell & Rent Properties",
    template: "%s | HomeTrust",
  },
  description:
    "Find your dream home with HomeTrust. Buy, sell and rent properties easily.",
  metadataBase: new URL("https://homest.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">

        {/* Responsive Header */}
        <Suspense
          fallback={
            <header className="h-16 border-b bg-white" />
          }
        >
          <Header />
        </Suspense>

        {/* Main Page Content */}
        <div className="min-h-screen pb-20 md:pb-0">
          {children}
        </div>

      </body>
    </html>
  );
}
