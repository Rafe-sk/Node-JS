import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    circumference: {
      type: Number,
      required: true,
    },
    moon:{
      type:Number,
      required:true
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets",planetSchema)

export default planetModel