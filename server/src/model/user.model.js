import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
  extName: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  province: {
    type: String,
    require: true,
  },
  municipality: {
    type: String,
    require: true,
  },
  barangay: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  validId: {
    type: [String],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
