export type PropertyPurpose = "SALE" | "RENT";

export type PropertyType =
  | "APARTMENT"
  | "VILLA"
  | "HOUSE"
  | "PLOT"
  | "COMMERCIAL";

export interface Property {
  id: string;
  title: string;
  description: string;
  purpose: PropertyPurpose;
  propertyType: PropertyType;
  price: number;
  location: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  featured: boolean;
  image: string;
}