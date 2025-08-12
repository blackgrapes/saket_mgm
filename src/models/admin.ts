import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Admin =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);
