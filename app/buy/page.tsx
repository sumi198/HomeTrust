import type { Metadata } from "next";
import PropertyGrid from "@/components/property/PropertyGrid";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Buy Property",
  description: "Explore properties available for purchase.",
};

export default function BuyPage() {
  const buyProperties = properties.filter(
    (property) => property.purpose === "SALE"
  );

  return (
    <>
      <section className="bg-emerald-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-emerald-300">HOMETRUST / BUY</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Find your dream home
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-emerald-100">
            Explore homes, apartments and properties available for purchase.
          </p>
        </div>
      </section>

      <PropertyGrid properties={buyProperties} title="Properties for Sale" />
    </>
  );
}