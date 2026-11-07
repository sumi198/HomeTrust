import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "List Your Property",
};

export default function ListPropertyPage() {
  return (
    <section className="bg-gray-50 px-4 py-14">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="font-bold text-emerald-700">SELL OR RENT</p>
          <h1 className="mt-3 text-4xl font-extrabold text-gray-900">
            List your property
          </h1>
          <p className="mt-3 leading-7 text-gray-500">
            Share your property details and find the right buyer or tenant.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm sm:p-9">
          <div className="mb-7 flex items-start gap-3 rounded-xl bg-emerald-50 p-4">
            <CheckCircle2 className="mt-1 shrink-0 text-emerald-700" />
            <p className="text-sm leading-6 text-emerald-900">
              Sign in or create a seller account to submit and manage your
              property listings.
            </p>
          </div>

          <h2 className="text-xl font-bold">Continue as a seller</h2>
          <p className="mt-2 text-sm text-gray-500">
            Seller registration is required before adding a property.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link
              href="/register"
              className="rounded-xl bg-emerald-700 px-5 py-4 text-center font-bold text-white hover:bg-emerald-800"
            >
              Create Seller Account
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-gray-300 px-5 py-4 text-center font-bold text-gray-800 hover:bg-gray-50"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}