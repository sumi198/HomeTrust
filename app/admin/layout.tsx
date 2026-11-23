import { Suspense } from "react";
import { connection } from "next/server";
import { requireRole } from "@/lib/permission";

async function AdminAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Run authentication at request time, inside Suspense.
  await connection();
  await requireRole("ADMIN");

  return <>{children}</>;
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div className="p-6">Loading admin...</div>}>
      <AdminAuth>{children}</AdminAuth>
    </Suspense>
  );
}
