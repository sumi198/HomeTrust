
import Link from "next/link";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="hidden bg-gray-950 text-gray-300 md:block">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2">
            <Building2 className="text-emerald-400" size={27} />

            <span className="text-2xl font-extrabold text-white">
              HomeTrust
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-gray-400">
            Find your dream home, discover better spaces and
            make property decisions with confidence.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-5 font-bold text-white">
            Explore
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link href="/buy" className="hover:text-emerald-400">
              Buy Property
            </Link>

            <Link href="/rent" className="hover:text-emerald-400">
              Rent Property
            </Link>

            <Link href="/map" className="hover:text-emerald-400">
              Property Map
            </Link>

            <Link href="/list-property" className="hover:text-emerald-400">
              List Property
            </Link>
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 className="mb-5 font-bold text-white">
            Account
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link href="/login" className="hover:text-emerald-400">
              Login
            </Link>

            <Link href="/register" className="hover:text-emerald-400">
              Create Account
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-bold text-white">
            Contact
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin size={17} />
              India
            </p>

            <p className="flex items-center gap-2">
              <Mail size={17} />
              support@homest.com
            </p>

            <p className="flex items-center gap-2">
              <Phone size={17} />
              Contact details coming soon
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-4 py-6 text-center text-xs text-gray-500">
        © 2026 HomeTrust. All rights reserved.
      </div>
    </footer>
  );
}
