import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt properties
  }
);


export const Book = mongoose.model('BookModel', bookSchema);