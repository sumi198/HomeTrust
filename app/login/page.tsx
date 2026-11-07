import Link from "next/link";
import { Building2 } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border bg-white p-7 shadow-sm sm:p-9">
        <div className="text-center">
          <Building2 className="mx-auto text-emerald-700" size={42} />
          <h1 className="mt-4 text-3xl font-extrabold">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to your HomeTrust account.
          </p>
        </div>

        <form className="mt-8 space-y-5">
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
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-600"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white hover:bg-emerald-800"
          >
            Login
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-emerald-700">
            Register
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-gray-400">
          Login will be connected to Auth.js in Phase 3.
        </p>
      </div>
    </section>
  );
}