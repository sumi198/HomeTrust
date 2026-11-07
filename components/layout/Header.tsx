
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Building2,
  KeyRound,
  MapPin,
  PlusCircle,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "Buy",
    href: "/buy",
    icon: Building2,
  },
  {
    name: "Rent",
    href: "/rent",
    icon: KeyRound,
  },
  {
    name: "Map",
    href: "/map",
    icon: MapPin,
  },
  {
    name: "List",
    label: "List Property",
    href: "/list-property",
    icon: PlusCircle,
  },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Desktop + Mobile Top Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            Home<span className="text-blue-600">Trust</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">

            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 text-sm font-semibold transition ${
                    active
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Icon size={19} />
                  {item.label || item.name}
                </Link>
              );
            })}

          </nav>

          {/* Mobile Header Right Icon */}
          <Link
            href="/map"
            className="rounded-full p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Explore map"
          >
            <MapPin size={23} />
          </Link>

          {/* Desktop User Button */}
          <Link
            href="/list-property"
            className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            + List Property
          </Link>

        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_15px_rgba(0,0,0,0.05)] md:hidden"
      >
        <div className="mx-auto grid h-16 max-w-lg grid-cols-5">

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 transition ${
                  active
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Icon
                  size={23}
                  strokeWidth={active ? 2.6 : 1.8}
                />

                <span
                  className={`text-[10px] ${
                    active ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>

              </Link>
            );
          })}

        </div>
      </nav>
    </>
  );
}
