import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.Model("Post", postSchema);
