export const dynamic = "force-dynamic";

type PropertyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({
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
