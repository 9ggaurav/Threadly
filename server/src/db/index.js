import mongoose from "mongoose";

const connectLocalDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_LOCAL_URI}`
    );
    console.log(`\n MongoDB connected LOCALLY!!`);
  } catch (error) {
    console.log("DB ERROR : ", error);
    process.exit(1);
  }
};

export default connectLocalDB;
