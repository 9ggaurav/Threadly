import dotenv from "dotenv";
import mongoose, { mongo, Schema } from "mongoose";

const followRequestSchema = new Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FollowRequest = mongoose.Model(
  "FollowRequest",
  followRequestSchema
);
