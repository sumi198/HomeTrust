
import { Suspense } from "react";

type PropertyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Ye component property ID ko read karega
async function PropertyDetails({
  params,
}: PropertyPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">
        Property Details
      </h1>

      <p className="mt-4 text-gray-600">
        Property ID: {id}
      </p>
    </main>
  );
}

// Main page component
export default function PropertyDetailsPage({
  params,
}: PropertyPageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-7xl px-4 py-10">
          <p className="text-gray-500">
            Loading property details...
          </p>
        </main>
      }
    >
      <PropertyDetails params={params} />
    </Suspense>
  );
}
