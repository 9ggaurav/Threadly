import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";

const followSchema = new Schema(
  {
    followerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Follow = mongoose.Model("Follow", followSchema);
