
import { NextResponse } from "next/server";
import { properties } from "@/data/properties";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: properties,
  });
}
