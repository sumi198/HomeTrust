import Link from "next/link";
import {
  Search,
  Building2,
  KeyRound,
  MapPin,
  PlusCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-950 px-5 py-24 text-center text-white">

        <p className="mb-4 text-blue-300">
          Welcome to HomeTrust
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
          Find Your Perfect Place to Call Home
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          Buy, rent or sell properties with confidence.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-xl bg-white p-3 sm:flex-row">

          <input
            type="text"
            placeholder="Enter city, area or location"
            className="min-w-0 flex-1 px-4 py-3 text-gray-900 outline-none"
          />

          <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-white">
            <Search size={18} />
            Search
          </button>

        </div>
      </section>

      {/* Main Categories */}
      <section className="mx-auto max-w-7xl px-5 py-16">

        <h2 className="text-center text-3xl font-bold">
          Explore Properties
        </h2>

        <p className="mt-3 text-center text-gray-500">
          What are you looking for?
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <Category
            title="Buy Property"
            description="Find your dream home."
            href="/buy"
            icon={<Building2 size={35} />}
          />

          <Category
            title="Rent Property"
            description="Discover homes for rent."
            href="/rent"
            icon={<KeyRound size={35} />}
          />

          <Category
            title="Explore Map"
            description="Find properties by location."
            href="/map"
            icon={<MapPin size={35} />}
          />

          <Category
            title="List Property"
            description="Sell or rent your property."
            href="/list-property"
            icon={<PlusCircle size={35} />}
          />

        </div>
      </section>

      {/* Offers */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-2xl bg-blue-100 p-10 text-center">

          <h2 className="text-3xl font-bold">
            Special Property Offers
          </h2>

          <p className="mt-3 text-gray-600">
            Discover properties that match your budget.
          </p>

          <Link
            href="/buy"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-7 py-3 text-white"
          >
            Explore Offers
          </Link>

        </div>
      </section>

    </main>
  );
}

function Category({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </Link>
  );
}