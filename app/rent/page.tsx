import type { Metadata } from "next";
import PropertyGrid from "@/components/property/PropertyGrid";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Rent Property",
  description: "Explore properties available for rent.",
};

export default function RentPage() {
  const rentProperties = properties.filter(
    (property) => property.purpose === "RENT"
  );

  return (
    <>
      <section className="bg-gray-900 px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-emerald-400">HOMETRUST / RENT</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Find a place to rent
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-gray-300">
            Discover comfortable homes and apartments for your next move.
          </p>
        </div>
      </section>

      <PropertyGrid properties={rentProperties} title="Properties for Rent" />
    </>
  );
}