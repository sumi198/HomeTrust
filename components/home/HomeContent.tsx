
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Building2,
  KeyRound,
  MapPinned,
  ArrowRight,
  TrendingUp,
  Tag,
} from "lucide-react";

import PropertyCard from "@/components/property/PropertyCard";
import { properties } from "@/data/properties";

export default function HomeContent() {
  const [search, setSearch] = useState("");

  const trendingProperties = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return properties;

    return properties.filter((property) =>
      [
        property.title,
        property.city,
        property.location,
        property.state,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <>
      {/* Hero and Search */}
      <section className="bg-[#192957] px-4 py-16 text-center text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium text-blue-300 sm:text-base">
            Welcome to HomeTrust
          </p>

          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Find Your Perfect
            <br className="hidden sm:block" /> Place to Call Home
          </h1>

          <p className="mt-5 text-sm text-blue-100 sm:text-lg">
            Buy, rent or sell properties with confidence.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-9 max-w-2xl rounded-2xl bg-white p-3 shadow-xl sm:mt-12 sm:p-4">
            <div className="flex items-center gap-3 px-3">
              <MapPin className="shrink-0 text-gray-400" size={20} />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Enter city, area or location"
                className="h-11 w-full min-w-0 bg-white text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
                aria-label="Search properties by city or location"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("trending-properties")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:py-4"
            >
              <Search size={18} />
              Search Properties
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-blue-100 sm:text-sm">
            <span>Popular:</span>
            {["Lucknow", "Noida", "Gurugram"].map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSearch(city)}
                className="rounded-full border border-blue-300/40 px-3 py-1 hover:bg-white/10"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Properties */}
      <section
        id="trending-properties"
        className="mx-auto max-w-7xl px-4 py-12 sm:py-16"
      >
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
              <TrendingUp size={18} />
              TRENDING NOW
            </div>

            <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Trending Properties & Offers
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Explore popular homes and featured property listings.
            </p>
          </div>

          <Link
            href="/buy"
            className="hidden items-center gap-2 text-sm font-bold text-blue-600 sm:flex"
          >
            View all <ArrowRight size={17} />
          </Link>
        </div>

        {search && (
          <div className="mb-5 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm">
            <span className="text-gray-700">
              Showing results for: <strong>{search}</strong>
            </span>
            <button
              onClick={() => setSearch("")}
              className="font-semibold text-blue-700"
            >
              Clear
            </button>
          </div>
        )}

        {trendingProperties.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trendingProperties.map((property) => (
              <div key={property.id} className="relative">
                <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 shadow">
                  <Tag size={13} />
                  Featured
                </div>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-gray-50 px-5 py-14 text-center">
            <Search className="mx-auto text-gray-400" size={32} />
            <h3 className="mt-3 font-bold text-gray-800">
              No matching properties found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try searching another city or area.
            </p>
          </div>
        )}

        <Link
          href="/buy"
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-blue-600 py-3 text-sm font-bold text-blue-700 sm:hidden"
        >
          View All Properties <ArrowRight size={17} />
        </Link>
      </section>

      {/* Explore */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Explore Properties
            </h2>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              What are you looking for?
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Link
              href="/buy"
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Building2 className="text-blue-600" size={30} />
              <h3 className="mt-4 font-bold text-gray-900">Buy Property</h3>
              <p className="mt-2 text-sm text-gray-500">
                Find a home of your own.
              </p>
            </Link>

            <Link
              href="/rent"
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <KeyRound className="text-blue-600" size={30} />
              <h3 className="mt-4 font-bold text-gray-900">Rent Property</h3>
              <p className="mt-2 text-sm text-gray-500">
                Find a place that suits you.
              </p>
            </Link>

            <Link
              href="/map"
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <MapPinned className="text-blue-600" size={30} />
              <h3 className="mt-4 font-bold text-gray-900">Explore Map</h3>
              <p className="mt-2 text-sm text-gray-500">
                Discover properties by location.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* List Property Banner */}
      <section className="bg-[#192957] px-4 py-14 text-center text-white sm:py-16">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Want to sell or rent your property?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
          List your property on HomeTrust and connect with potential buyers
          and tenants.
        </p>
        <Link
          href="/list-property"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-bold text-white hover:bg-blue-700"
        >
          List Your Property
        </Link>
      </section>
    </>
  );
}
