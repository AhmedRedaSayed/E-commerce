import mongoose from "mongoose";

export const dataBaseConnection = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    `mongodb+srv://myAtlasDBUser:${process.env.DBPASSWORD}@myatlasclusteredu.jsq2l86.mongodb.net/`
  );
};
