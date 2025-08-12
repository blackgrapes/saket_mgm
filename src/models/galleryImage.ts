import mongoose, { Schema, model, models } from "mongoose";

const GallerySchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default models.Gallery || model("Gallery", GallerySchema);
