
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  MapPin,
  Maximize,
} from "lucide-react";

import {
  getPropertyById,
  properties,
} from "@/data/properties";

type Props = {
  params: Promise<{ id: string }>;
};

// Demo properties ke static routes generate honge.
export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

// Loading UI
function PropertyLoading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-10">
      <div className="h-6 w-40 rounded bg-gray-200" />
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="min-h-[300px] rounded-2xl bg-gray-200 sm:min-h-[500px]" />
        <div className="space-y-5">
          <div className="h-8 w-3/4 rounded bg-gray-200" />
          <div className="h-5 w-1/2 rounded bg-gray-200" />
          <div className="h-10 w-2/3 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

// Params access Suspense ke andar hoga.
async function PropertyDetails({ params }: Props) {
  const { id } = await params;

  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const price = new Intl.NumberFormat("en-IN").format(
    property.price
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <Link
        href="/buy"
        className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
      >
        <ArrowLeft size={17} />
        Back to properties
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[500px]">
          <Image
            src={property.image}
            alt={property.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <div>
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-800">
            {property.purpose === "SALE" ? "FOR SALE" : "FOR RENT"}
          </span>

          <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {property.title}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-gray-500">
            <MapPin size={19} />
            {property.location}, {property.city}, {property.state}
          </p>

          <p className="mt-7 text-3xl font-extrabold text-emerald-700">
            ₹{price}
            {property.purpose === "RENT" && (
              <span className="text-sm font-medium text-gray-500">
                {" "}/ month
              </span>
            )}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-gray-50 p-5">
            <div>
              <BedDouble className="text-emerald-700" />
              <p className="mt-2 font-bold">{property.bedrooms}</p>
              <p className="text-xs text-gray-500">Bedrooms</p>
            </div>

            <div>
              <Bath className="text-emerald-700" />
              <p className="mt-2 font-bold">{property.bathrooms}</p>
              <p className="text-xs text-gray-500">Bathrooms</p>
            </div>

            <div>
              <Maximize className="text-emerald-700" />
              <p className="mt-2 font-bold">{property.area}</p>
              <p className="text-xs text-gray-500">
                {property.areaUnit}
              </p>
            </div>
          </div>

          <h2 className="mt-9 text-xl font-bold">
            About this property
          </h2>

          <p className="mt-3 leading-8 text-gray-600">
            {property.description}
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex w-full justify-center rounded-xl bg-emerald-700 px-6 py-4 font-bold text-white hover:bg-emerald-800"
          >
            Contact Seller
          </Link>
        </div>
      </div>
    </section>
  );
}

// Page component
export default function PropertyDetailsPage({ params }: Props) {
  return (
    <Suspense fallback={<PropertyLoading />}>
      <PropertyDetails params={params} />
    </Suspense>
  );
}
