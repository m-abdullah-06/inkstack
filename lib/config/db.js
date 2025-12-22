import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://abd:ITXABBY006@cluster0.d97wdnk.mongodb.net/blog')
    console.log("Connected to MongoDB");
}