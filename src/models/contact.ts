import  { Schema, model, models } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true },
    subject: { type: String, required: true, minlength: 3 },
    message: { type: String, required: true, minlength: 10 },
  },
  { timestamps: true }
);

const ContactModel = models.Contact || model("Contact", contactSchema);
export default ContactModel;
