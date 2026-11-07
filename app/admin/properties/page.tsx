
import Link from "next/link";
import { properties } from "@/data/properties";

export default function AdminPropertiesPage() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Properties</h1>
          <p className="mt-2 text-gray-500">
            Manage HomeTrust property listings.
          </p>
        </div>

        <Link
          href="/admin/properties/new"
          className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white"
        >
          Add Property
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-white p-4"
          >
            <div>
              <h2 className="font-bold">{property.title}</h2>
              <p className="text-sm text-gray-500">
                {property.city} · {property.purpose}
              </p>
            </div>

            <Link
              href={`/admin/properties/${property.id}`}
              className="font-semibold text-emerald-700"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
