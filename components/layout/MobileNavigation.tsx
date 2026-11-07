
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  KeyRound,
  MapPin,
  CirclePlus,
} from "lucide-react";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Buy", href: "/buy", icon: Building2 },
  { label: "Rent", href: "/rent", icon: KeyRound },
  { label: "Map", href: "/map", icon: MapPin },
  { label: "List", href: "/list-property", icon: CirclePlus },
];

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-15.5 flex-col items-center justify-center gap-1 text-[11px] ${
                active
                  ? "font-bold text-blue-600"
                  : "text-gray-500"
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
