
import Link from "next/link";

export default function CustomerDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold">Customer Dashboard</h1>
      <p className="mt-3 text-gray-500">
        Welcome to your HomeTrust customer account.
      </p>

      <Link
        href="/buy"
        className="mt-6 inline-flex rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white"
      >
        Explore Properties
      </Link>
    </div>
  );
}
