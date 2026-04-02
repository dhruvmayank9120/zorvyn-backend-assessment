import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: Number,
    type: { type: String, enum: ["income", "expense"] },
    category: String,
    date: Date,
    notes: String,
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordSchema);