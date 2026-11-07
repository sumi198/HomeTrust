
import Link from "next/link";

export default function SellerDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold">Seller Dashboard</h1>
      <p className="mt-3 text-gray-500">
        Manage your property listings from here.
      </p>

      <Link
        href="/list-property"
        className="mt-6 inline-flex rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white"
      >
        List New Property
      </Link>
    </div>
  );
}
