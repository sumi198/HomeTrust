import Link from "next/link";

export default function PropertiesPage() {
  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold">
        All Properties
      </h1>

      <Link
        href="/property/101"
        className="mt-5 inline-block text-blue-600"
      >
        View Property Details
      </Link>

    </main>
  );
}