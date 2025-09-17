import { connectDB } from "@/lib/mongodb";
import TC from "@/models/tc";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    const { studentName, studentClass, rollNumber, admissionNumber, tcUrl, public_id } = data;

    if (!studentName || !studentClass || !rollNumber || !admissionNumber || !tcUrl || !public_id) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newTC = await TC.create({
      studentName,
      studentClass,
      rollNumber,
      admissionNumber,
      tcUrl,
      public_id,
    });

    return NextResponse.json({ message: "TC saved successfully", tc: newTC }, { status: 201 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Failed to save TC" }, { status: 500 });
  }
}

import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    await connectDB();
    const allTCs = await TC.find({}).sort({ date: -1 }); // latest first
    return NextResponse.json(allTCs, { status: 200 });
  } catch (err) {
    console.error("GET Error:", err);
    return NextResponse.json({ error: "Failed to fetch TCs" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "TC ID required" }, { status: 400 });
    }

    const tc = await TC.findById(id);
    if (!tc) {
      return NextResponse.json({ error: "TC not found" }, { status: 404 });
    }

    // Delete image from Cloudinary
    await cloudinary.v2.uploader.destroy(tc.public_id);

    // Delete from MongoDB
    await TC.findByIdAndDelete(id);

    return NextResponse.json({ message: "TC deleted successfully" }, { status: 200 });
  } catch (err) {
    console.error("DELETE Error:", err);
    return NextResponse.json({ error: "Failed to delete TC" }, { status: 500 });
  }
}