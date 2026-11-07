import Link from "next/link";
import {
  ArrowRight,
  Building2,
  KeyRound,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import PropertyGrid from "@/components/property/PropertyGrid";
import { properties } from "@/data/properties";

export default function HomePage() {
  const featuredProperties = properties.filter((p) => p.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,15,0.95),rgba(3,20,15,0.55)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800')] bg-cover bg-center" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-200">
              Welcome to HomeTrust
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Find a place where
              <span className="text-emerald-400"> life feels right.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
              Explore verified property opportunities, discover your dream
              home and make your next move with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/buy"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white hover:bg-emerald-700"
              >
                Explore Properties <ArrowRight size={18} />
              </Link>

              <Link
                href="/list-property"
                className="rounded-xl border border-white/50 px-7 py-4 font-bold text-white hover:bg-white/10"
              >
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:grid-cols-3">
        <Link href="/buy" className="rounded-2xl border p-6 transition hover:border-emerald-500 hover:shadow-lg">
          <Building2 className="text-emerald-700" size={30} />
          <h2 className="mt-4 text-xl font-bold">Buy a Property</h2>
          <p className="mt-2 text-sm text-gray-500">Find a home to call your own.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
            Explore Buy <ArrowRight size={16} />
          </span>
        </Link>

        <Link href="/rent" className="rounded-2xl border p-6 transition hover:border-emerald-500 hover:shadow-lg">
          <KeyRound className="text-emerald-700" size={30} />
          <h2 className="mt-4 text-xl font-bold">Rent a Property</h2>
          <p className="mt-2 text-sm text-gray-500">Discover a place that suits you.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
            Explore Rent <ArrowRight size={16} />
          </span>
        </Link>

        <Link href="/map" className="rounded-2xl border p-6 transition hover:border-emerald-500 hover:shadow-lg">
          <MapPinned className="text-emerald-700" size={30} />
          <h2 className="mt-4 text-xl font-bold">Explore on Map</h2>
          <p className="mt-2 text-sm text-gray-500">Explore property locations.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
            View Map <ArrowRight size={16} />
          </span>
        </Link>
      </section>

      <PropertyGrid
        properties={featuredProperties}
        title="Featured Properties"
      />

      <section className="bg-emerald-950 px-4 py-16 text-center text-white">
        <ShieldCheck className="mx-auto text-emerald-400" size={42} />
        <h2 className="mt-5 text-3xl font-extrabold">
          Ready to list your property?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-100">
          Share your property details and connect with people looking for
          their next home.
        </p>
        <Link
          href="/list-property"
          className="mt-7 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-emerald-950 hover:bg-emerald-100"
        >
          Start Listing
        </Link>
      </section>
    </>
  );
}