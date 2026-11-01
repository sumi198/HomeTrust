export default function ListPropertyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">

      <h1 className="text-4xl font-bold">
        List Your Property
      </h1>

      <p className="mt-3 text-gray-500">
        Submit your property for sale or rent.
      </p>

      <form className="mt-10 space-y-5">

        <div>
          <label className="mb-2 block">Property Title</label>
          <input
            required
            placeholder="Enter property name"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Listing Type</label>
          <select className="w-full rounded-lg border p-3">
            <option value="sale">Sell Property</option>
            <option value="rent">Rent Property</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block">Property Type</label>
          <select className="w-full rounded-lg border p-3">
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Commercial</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block">Price</label>
          <input
            required
            type="number"
            placeholder="Enter price"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Location</label>
          <input
            required
            placeholder="City, area, address"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block">Description</label>
          <textarea
            rows={5}
            placeholder="Describe your property"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-4 font-semibold text-white"
        >
          Submit Property
        </button>

      </form>
    </main>
  );
}