import mongoose, { Schema, model, models } from 'mongoose';

const NewsSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

export const News = models.News || model('News', NewsSchema);
