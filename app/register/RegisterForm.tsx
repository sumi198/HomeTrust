
"use client";

import { useActionState } from "react";
import { registerAction } from "./actions";

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    {}
  );

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          minLength={2}
          maxLength={80}
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
          name="email"
          type="email"
          autoComplete="email"
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
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          maxLength={72}
          placeholder="At least 8 characters"
          required
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-emerald-600"
        />
        <p className="mt-1 text-xs text-gray-500">
          Use at least 8 characters.
        </p>
      </div>

      <div>
        <label htmlFor="role" className="mb-2 block text-sm font-semibold">
          Account Type
        </label>
        <select
          id="role"
          name="role"
          defaultValue="CUSTOMER"
          required
          className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-emerald-600"
        >
          <option value="CUSTOMER">Customer</option>
          <option value="SELLER">Seller</option>
        </select>
      </div>

      {state.error && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white hover:bg-emerald-800 disabled:opacity-60"
      >
        {pending ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
