import { MapPin } from "lucide-react";

export default function MapPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="text-4xl font-bold">Explore Property Map</h1>

      <div className="mt-8 flex min-h-112.5 items-center justify-center rounded-2xl border bg-gray-100">
        <div className="text-center">
          <MapPin size={50} className="mx-auto text-blue-600" />
          <h2 className="mt-4 text-xl font-semibold">
            Property Map
          </h2>
          <p className="mt-2 text-gray-500">
            Map integration will be added later.
          </p>
        </div>
      </div>
    </main>
  );
}