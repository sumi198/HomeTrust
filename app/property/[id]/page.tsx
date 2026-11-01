type Props = {
  params: Promise<{ id: string }>;
};

export default async function PropertyDetails({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <h1 className="text-4xl font-bold">
        Property Details
      </h1>

      <p className="mt-4 text-gray-500">
        Property ID: {id}
      </p>

      <p className="mt-5">
        Property images, price, location, amenities
        and owner details will appear here.
      </p>
    </main>
  );
}