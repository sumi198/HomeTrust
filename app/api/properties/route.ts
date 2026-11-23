
// import { NextResponse } from "next/server";
// import { properties } from "@/data/properties";

// export async function GET() {
//   return NextResponse.json({
//     success: true,
//     data: properties,
//   });
// }




import { NextResponse } from "next/server";
import { getPublicProperties } from "@/lib/services/property.service";

export async function GET() {
  try {
    const properties = await getPublicProperties();

    return NextResponse.json({
      success: true,
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    console.error("Properties API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch properties.",
      },
      { status: 500 }
    );
  }
}
