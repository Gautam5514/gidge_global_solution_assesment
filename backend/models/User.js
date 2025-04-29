import mongoose from "mongoose";

const userScema = mongoose.Schema({
    name: String,
    email: {type: String, required : true},
    password: String,
    country: String,
});

export default mongoose.model('User', userScema);