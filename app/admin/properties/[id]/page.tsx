
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

async function AdminPropertyDetailsContent({ params }: Props) {
  const { id } = await params;

  return (
    <div className="p-6 sm:p-8">
      <Link
        href="/admin/properties"
        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
      >
        Back to properties
      </Link>

      <h1 className="mt-5 text-3xl font-bold">
        Manage Property
      </h1>

      <p className="mt-3 text-gray-600">
        Property ID: {id}
      </p>

      <p className="mt-3 text-sm text-gray-500">
        Editing, approval and deletion will be connected to the database
        in the admin backend phase.
      </p>
    </div>
  );
}

export default function AdminPropertyDetailsPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className="p-6 sm:p-8">
          <p className="text-gray-500">Loading property details...</p>
        </div>
      }
    >
      <AdminPropertyDetailsContent params={params} />
    </Suspense>
  );
}
