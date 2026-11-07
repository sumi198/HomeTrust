
import { NextResponse } from "next/server";
import { properties } from "@/data/properties";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Admin properties API placeholder.",
    data: properties,
  });
}
