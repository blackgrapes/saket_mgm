// src/app/api/upload/route.ts
import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import { Readable } from "stream";
import mongoose from "mongoose";
import Gallery from "@/models/galleryImage";  
import { connectDB } from "@/lib/mongodb";

// 📌 Connect to MongoDB
connectDB();
// 📌 Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 📌 Convert buffer to stream
function bufferToStream(buffer: Buffer) {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
}

export async function POST(req: Request) {
  try {
    console.log("[Upload API] Starting upload process...");

    // Connect to DB
    await connectDB();
    console.log("[Upload API] Connected to MongoDB");

    // Check env vars
    console.log("[Upload API] Env vars:",
      "Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME,
      "API Key:", process.env.CLOUDINARY_API_KEY?.slice(0,4) + "...",
      "API Secret:", process.env.CLOUDINARY_API_SECRET ? "SET" : "NOT SET"
    );

    const formData = await req.formData();
    console.log("[Upload API] Form data received");

    const file = formData.get("image") as unknown as File | null;
    const title = formData.get("title") as string | null;
    const category = formData.get("category") as string | null;
    const description = formData.get("description") as string | null;

    console.log("[Upload API] Parsed fields:", { title, category, description, hasFile: !!file });

    if (!file || !title || !category) {
      console.error("[Upload API] Missing required fields");
      return NextResponse.json(
        { error: "Title, category, and image are required" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log("[Upload API] File converted to buffer, size:", buffer.length);

    // Upload to Cloudinary
    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "school-gallery",
          resource_type: "image",
          transformation: [{ width: 1600, crop: "scale" }],
        },
        (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (error) {
            console.error("[Upload API] Cloudinary upload error:", error);
            return reject(error);
          }
          if (!result) {
            console.error("[Upload API] Cloudinary upload returned no result");
            return reject(new Error("No result from Cloudinary"));
          }
          console.log("[Upload API] Cloudinary upload success:", result.secure_url);
          resolve(result);
        }
      );
      bufferToStream(buffer).pipe(stream);
    });

    // Save to MongoDB
    const newImage = await Gallery.create({
      title,
      category,
      description,
      imageUrl: uploadResult.secure_url,
      date: new Date(),
    });
    console.log("[Upload API] Saved new image to DB:", newImage._id);

    return NextResponse.json({
      message: "Uploaded and saved successfully",
      data: newImage,
    });

  } catch (error) {
    console.error("[Upload API] Upload error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 500 }
    );
  }
}