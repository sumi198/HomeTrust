
import Link from "next/link";
import { Building2 } from "lucide-react";
import LoginForm from "./LoginForm";

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

        <LoginForm />

        <p className="mt-7 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-emerald-700">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
