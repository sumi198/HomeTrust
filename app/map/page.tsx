import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { properties } from "@/data/properties";

export default function MapPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <p className="font-bold text-emerald-700">HOMETRUST / MAP</p>
      <h1 className="mt-3 text-4xl font-extrabold text-gray-900">
        Explore properties by location
      </h1>
      <p className="mt-3 text-gray-500">
        Browse available properties and open their details.
      </p>

      <div className="mt-9 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex min-h-105 flex-col items-center justify-center rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center">
          <Navigation size={48} className="text-emerald-700" />
          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            Property Map
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600">
            Interactive map, property markers and location-based search will
            be connected in the map integration phase.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">Available Locations</h2>

          <div className="space-y-3">
            {properties.map((property) => (
              <Link
                key={property.id}
                href={`/property/${property.id}`}
                className="flex items-center gap-4 rounded-2xl border p-4 transition hover:border-emerald-500 hover:shadow-md"
              >
                <span className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <MapPin size={23} />
                </span>

                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900">
                    {property.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {property.location}, {property.city}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}