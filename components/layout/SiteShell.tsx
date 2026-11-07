
// "use client";

// import { Suspense } from "react";
// import { usePathname } from "next/navigation";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import MobileNavigation from "@/components/layout/MobileNavigation";

// function SiteShellContent({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const isAdmin = pathname.startsWith("/admin");

//   // Admin pages: no public website components
//   if (isAdmin) {
//     return <>{children}</>;
//   }

//   // Public website pages
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//       <MobileNavigation />
//     </>
//   );
// }

// export default function SiteShell({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <Suspense fallback={<main>{children}</main>}>
//       <SiteShellContent>{children}</SiteShellContent>
//     </Suspense>
//   );
// }



"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";

function SiteShellContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileNavigation />
    </>
  );
}

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<>{children}</>}>
      <SiteShellContent>{children}</SiteShellContent>
    </Suspense>
  );
}
