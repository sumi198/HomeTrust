import Link from "next/link";
import { Building2 } from "lucide-react";

export default function RegisterPage() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border bg-white p-7 shadow-sm sm:p-9">
        <div className="text-center">
          <Building2 className="mx-auto text-emerald-700" size={42} />
          <h1 className="mt-4 text-3xl font-extrabold">Create Account</h1>
          <p className="mt-2 text-sm text-gray-500">
            Join HomeTrust to explore properties.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              minLength={8}
              placeholder="At least 8 characters"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-semibold">
              Account Type
            </label>
            <select
              id="role"
              className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-emerald-600"
              defaultValue="CUSTOMER"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="SELLER">Seller</option>
            </select>
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white hover:bg-emerald-800"
          >
            Create Account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-emerald-700">
            Login
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-gray-400">
          Registration will be connected to the database in Phase 3.
        </p>
      </div>
    </section>
  );
}