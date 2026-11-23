
import { prisma } from "../lib/prisma";

async function main() {
  // Demo seller account. Login functionality Phase 3 में बनेगी.
  const seller = await prisma.user.upsert({
    where: {
      email: "demo-seller@hometrust.local",
    },
    update: {},
    create: {
      name: "HomeTrust Demo Seller",
      email: "demo-seller@hometrust.local",
      role: "SELLER",
    },
  });

  const properties = [
    {
      id: "demo-property-101",
      title: "Luxury 3 BHK Apartment",
      slug: "luxury-3-bhk-apartment-noida",
      description:
        "Beautiful modern apartment with spacious rooms, balcony and premium amenities.",
      purpose: "SALE" as const,
      type: "APARTMENT" as const,
      price: "8500000",
      locality: "Sector 150",
      city: "Noida",
      state: "Uttar Pradesh",
      bedrooms: 3,
      bathrooms: 3,
      areaSqFt: 1850,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
    },
    {
      id: "demo-property-102",
      title: "Premium Independent Villa",
      slug: "premium-independent-villa-gurugram",
      description:
        "Spacious family villa with garden, parking and modern interiors.",
      purpose: "SALE" as const,
      type: "VILLA" as const,
      price: "12500000",
      locality: "Sector 57",
      city: "Gurugram",
      state: "Haryana",
      bedrooms: 4,
      bathrooms: 4,
      areaSqFt: 2800,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000",
    },
    {
      id: "demo-property-103",
      title: "Modern 2 BHK Flat",
      slug: "modern-2-bhk-flat-ghaziabad",
      description:
        "Fully furnished apartment near metro station and shopping areas.",
      purpose: "RENT" as const,
      type: "APARTMENT" as const,
      price: "25000",
      locality: "Indirapuram",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1200,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
    },
    {
      id: "demo-property-104",
      title: "Beautiful Family House",
      slug: "beautiful-family-house-lucknow",
      description:
        "Independent house in a peaceful residential locality.",
      purpose: "RENT" as const,
      type: "HOUSE" as const,
      price: "35000",
      locality: "Gomti Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 1600,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000",
    },
  ];

  for (const item of properties) {
    const property = await prisma.property.upsert({
      where: { slug: item.slug },
      update: {
        title: item.title,
        description: item.description,
        status: "APPROVED",
        featured: item.featured,
      },
      create: {
        title: item.title,
        slug: item.slug,
        description: item.description,
        purpose: item.purpose,
        type: item.type,
        status: "APPROVED",
        featured: item.featured,
        price: item.price,
        locality: item.locality,
        city: item.city,
        state: item.state,
        bedrooms: item.bedrooms,
        bathrooms: item.bathrooms,
        areaSqFt: item.areaSqFt,
        sellerId: seller.id,
      },
    });

    await prisma.propertyImage.upsert({
      where: { id: item.id },
      update: {
        url: item.image,
        isFeatured: true,
      },
      create: {
        id: item.id,
        url: item.image,
        isFeatured: true,
        position: 0,
        propertyId: property.id,
      },
    });

    console.log(`Seeded: ${item.title}`);
  }
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
