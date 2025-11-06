import mongoose from "mongoose";

const signSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const signModel = mongoose.model("User", signSchema);

export default signModel;
