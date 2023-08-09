import mongoose from "mongoose";

let isConnected = false;

let isConnectedSpins = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

export const connectToDBSpins = async () => {
    mongoose.set("strictQuery", true);
    if (isConnectedSpins) {
        console.log("MongoDB SPIN DATABASE is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_SPIN_URI, {
            dbName: "spins",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnectedSpins = true;
        console.log("MongoDB SPIN DATABASE connected");
    }
    catch (error) {
        console.log(error);
    }
}