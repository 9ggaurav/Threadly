const mongoose = require("mongoose");
const { Schema } = mongoose;

const mediaSchema = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      // Cloudinary URL
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Optional: create a model
export const Media = mongoose.model("Media", mediaSchema);
