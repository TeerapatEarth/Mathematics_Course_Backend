const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://teerapat:Earth241043+@cluster0.fa0u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database!!");
      console.error(error);
      process.exit(1);
    });
};
