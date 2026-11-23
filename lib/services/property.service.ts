
import { prisma } from "@/lib/prisma";
import type { Property } from "@/types/property";

const fallbackImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000";

function mapProperty(property: {
  id: string;
  title: string;
  description: string;
  purpose: "SALE" | "RENT";
  type: "APARTMENT" | "VILLA" | "HOUSE" | "PLOT" | "COMMERCIAL";
  price: { toNumber(): number };
  locality: string | null;
  addressLine: string | null;
  city: string;
  state: string;
  bedrooms: number | null;
  bathrooms: number | null;
  areaSqFt: number | null;
  featured: boolean;
  images: { url: string; position: number }[];
}): Property {
  const firstImage = [...property.images].sort(
    (a, b) => a.position - b.position
  )[0];

  return {
    id: property.id,
    title: property.title,
    description: property.description,
    purpose: property.purpose,
    propertyType: property.type,
    price: property.price.toNumber(),
    location:
      property.locality || property.addressLine || property.city,
    city: property.city,
    state: property.state,
    bedrooms: property.bedrooms ?? 0,
    bathrooms: property.bathrooms ?? 0,
    area: property.areaSqFt ?? 0,
    areaUnit: "sqft",
    featured: property.featured,
    image: firstImage?.url || fallbackImage,
  };
}

const publicInclude = {
  images: {
    orderBy: {
      position: "asc" as const,
    },
  },
};

export async function getPublicProperties(
  purpose?: "SALE" | "RENT"
): Promise<Property[]> {
  const records = await prisma.property.findMany({
    where: {
      status: "APPROVED",
      ...(purpose ? { purpose } : {}),
    },
    include: publicInclude,
    orderBy: {
      createdAt: "desc",
    },
  });

  return records.map(mapProperty);
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const records = await prisma.property.findMany({
    where: {
      status: "APPROVED",
      featured: true,
    },
    include: publicInclude,
    orderBy: {
      createdAt: "desc",
    },
  });

  return records.map(mapProperty);
}

export async function getPublicPropertyById(
  id: string
): Promise<Property | null> {
  const record = await prisma.property.findFirst({
    where: {
      id,
      status: "APPROVED",
    },
    include: publicInclude,
  });

  return record ? mapProperty(record) : null;
}

export async function getAdminProperties(): Promise<Property[]> {
  const records = await prisma.property.findMany({
    include: publicInclude,
    orderBy: {
      createdAt: "desc",
    },
  });

  return records.map(mapProperty);
}


