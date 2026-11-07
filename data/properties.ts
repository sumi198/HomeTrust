import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "101",
    title: "Luxury 3 BHK Apartment",
    description:
      "Beautiful modern apartment with spacious rooms, balcony and premium amenities.",
    purpose: "SALE",
    propertyType: "APARTMENT",
    price: 8500000,
    location: "Sector 150",
    city: "Noida",
    state: "Uttar Pradesh",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    areaUnit: "sqft",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
  },
  {
    id: "102",
    title: "Premium Independent Villa",
    description:
      "Spacious family villa with garden, parking and modern interiors.",
    purpose: "SALE",
    propertyType: "VILLA",
    price: 12500000,
    location: "Sector 57",
    city: "Gurugram",
    state: "Haryana",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    areaUnit: "sqft",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000",
  },
  {
    id: "103",
    title: "Modern 2 BHK Flat",
    description:
      "Fully furnished apartment near metro station and shopping areas.",
    purpose: "RENT",
    propertyType: "APARTMENT",
    price: 25000,
    location: "Indirapuram",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: "sqft",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
  },
  {
    id: "104",
    title: "Beautiful Family House",
    description:
      "Independent house in a peaceful residential locality.",
    purpose: "RENT",
    propertyType: "HOUSE",
    price: 35000,
    location: "Gomti Nagar",
    city: "Lucknow",
    state: "Uttar Pradesh",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    areaUnit: "sqft",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000",
  },
];

export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id);
}