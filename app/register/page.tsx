
import Link from "next/link";
import { Building2 } from "lucide-react";
import RegisterForm from "./RegisterForm";

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

        <RegisterForm />

        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-emerald-700">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
