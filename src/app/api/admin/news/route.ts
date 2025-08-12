import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/galleryImage";
import { NextResponse } from "next/server";

// POST - Add new image
export async function POST(req: Request) {
  await connectDB();
  const { title, description, imageUrl, category } = await req.json();

  if (!title || !description || !imageUrl || !category) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const newImage = await Gallery.create({
    title,
    description,
    imageUrl,
    category
  });

  return NextResponse.json(newImage, { status: 201 });
}
