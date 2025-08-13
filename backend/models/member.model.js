import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: "true",
    required: "true",
  },
  speciality: {
    type: String,
    required: "true",
  },
  tag: {
    type: String,
    unique: "true",
    required: "true",
  },
});
const member = mongoose.model("member", memberSchema);
export default member;
