// /app/api/gallery/route.ts
import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import GalleryImage from "@/models/galleryImage";

export async function GET() {
  try {
    await connectDB();
    const images = await GalleryImage.find({}).sort({ createdAt: -1 });
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching gallery images", error }, { status: 500 });
  }
}
