import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const Users = mongoose.model("User", UserSchema);

export default Users;