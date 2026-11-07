
import Link from "next/link";
import {
  Building2,
  Users,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

const items = [
  {
    title: "Manage Properties",
    description: "View, approve and manage property listings.",
    href: "/admin/properties",
    icon: Building2,
  },
  {
    title: "Manage Users",
    description: "View registered customers and sellers.",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Enquiries",
    description: "View property enquiries.",
    href: "/admin/enquiries",
    icon: MessageSquare,
  },
  {
    title: "Add Property",
    description: "Create a property listing.",
    href: "/admin/properties/new",
    icon: PlusCircle,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-6 sm:p-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Admin Dashboard
      </h1>
      <p className="mt-2 text-gray-500">
        Welcome to your HomeTrust administration panel.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border bg-white p-6 transition hover:shadow-lg"
            >
              <Icon size={30} className="text-emerald-700" />
              <h2 className="mt-4 font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {item.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
