import mongoose, { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String, required: true },
});

// Yahan "testimonials" collection ka naam sahi rakhen
const Testimonial = models.Testimonial || model("testimonials", TestimonialSchema);

export default Testimonial;
