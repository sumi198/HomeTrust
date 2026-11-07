import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import { Property } from "@/types/property";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const price = new Intl.NumberFormat("en-IN").format(property.price);

  return (
    <Link
      href={`/property/${property.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-800">
          {property.purpose === "SALE" ? "FOR SALE" : "FOR RENT"}
        </span>

        {property.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">
          {property.title}
        </h3>

        <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} />
          {property.location}, {property.city}
        </p>

        <p className="mt-4 text-2xl font-extrabold text-emerald-700">
          ₹{price}
          {property.purpose === "RENT" && (
            <span className="text-sm font-normal text-gray-500"> / month</span>
          )}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t pt-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <BedDouble size={17} />
            {property.bedrooms} Beds
          </span>

          <span className="flex items-center gap-1">
            <Bath size={17} />
            {property.bathrooms} Baths
          </span>

          <span className="flex items-center gap-1">
            <Maximize size={17} />
            {property.area} {property.areaUnit}
          </span>
        </div>
      </div>
    </Link>
  );
}