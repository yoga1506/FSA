import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected succesfully");
  } catch (error) {
    console.error("Error on connecting to mongodb database", error);
    process.exit(1); // exit with failure
  }
};
