// import Link from "next/link";
// import { Building2, Menu, PlusCircle } from "lucide-react";

// const navigation = [
//   { label: "Home", href: "/" },
//   { label: "Buy", href: "/buy" },
//   { label: "Rent", href: "/rent" },
//   { label: "Map", href: "/map" },
// ];

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
//         <Link href="/" className="flex items-center gap-2">
//           <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white">
//             <Building2 size={23} />
//           </span>
//           <span className="text-2xl font-extrabold tracking-tight text-gray-900">
//             Home<span className="text-emerald-700">Trust</span>
//           </span>
//         </Link>

//         <nav className="hidden items-center gap-8 md:flex">
//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm font-semibold text-gray-600 transition hover:text-emerald-700"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-3 md:flex">
//           <Link
//             href="/login"
//             className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
//           >
//             Login
//           </Link>

//           <Link
//             href="/list-property"
//             className="flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
//           >
//             <PlusCircle size={17} />
//             List Property
//           </Link>
//         </div>

//         <Link
//           href="/list-property"
//           aria-label="List your property"
//           className="rounded-xl bg-emerald-700 p-3 text-white md:hidden"
//         >
//           <Menu size={22} />
//         </Link>
//       </div>
//     </header>
//   );
// }





import Link from "next/link";
import { Building2, MapPin } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Map", href: "/map" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:h-20">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-gray-200">
            Home
          </span>
          <span className="-ml-1 text-2xl font-extrabold tracking-tight text-blue-600">
            Trust
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-600 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/map"
            aria-label="Explore property locations"
            className="text-gray-700 hover:text-blue-600"
          >
            <MapPin size={23} />
          </Link>

          <Link
            href="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 md:block"
          >
            Login
          </Link>

          <Link
            href="/list-property"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 md:flex"
          >
            <Building2 size={17} />
            List Property
          </Link>
        </div>
      </div>
    </header>
  );
}
