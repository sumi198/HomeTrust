"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Property } from "@/types/property";
import PropertyCard from "./PropertyCard";

type Props = {
  properties: Property[];
  title?: string;
};

export default function PropertyGrid({
  properties,
  title = "Explore Properties",
}: Props) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("ALL");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        property.title.toLowerCase().includes(searchText) ||
        property.city.toLowerCase().includes(searchText) ||
        property.location.toLowerCase().includes(searchText);

      const matchesType =
        type === "ALL" || property.propertyType === type;

      return matchesSearch && matchesType;
    });
  }, [properties, search, type]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-7">
        <h2 className="text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-gray-500">
          Find a property that feels like home.
        </p>
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_220px]">
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3">
          <Search size={20} className="text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by property, city or location..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="ALL">All Property Types</option>
          <option value="APARTMENT">Apartment</option>
          <option value="VILLA">Villa</option>
          <option value="HOUSE">House</option>
          <option value="PLOT">Plot</option>
          <option value="COMMERCIAL">Commercial</option>
        </select>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-gray-50 py-16 text-center">
          <h3 className="text-xl font-bold text-gray-800">
            No properties found
          </h3>
          <p className="mt-2 text-gray-500">
            Try another city or property type.
          </p>
        </div>
      )}
    </section>
  );
}