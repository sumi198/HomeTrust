import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "HomeTrust - Buy, Sell & Rent Properties",
  description: "Find your dream home with HomeTrust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}