
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100 md:flex">
      <aside className="w-full bg-gray-950 p-5 text-white md:min-h-screen md:w-64">
        <Link href="/admin" className="text-2xl font-extrabold">
          HomeTrust Admin
        </Link>

        <nav className="mt-8 flex flex-wrap gap-4 text-sm md:flex-col">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/properties">Properties</Link>
          <Link href="/admin/properties/new">Add Property</Link>
          <Link href="/admin/users">Users</Link>
          <Link href="/admin/enquiries">Enquiries</Link>
        </nav>
      </aside>

      <main className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}
