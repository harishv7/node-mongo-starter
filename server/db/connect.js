const mongoose = require("mongoose");
const uri = process.env.DB_URL;

const connection = async () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Database connection succeeded!");
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
    throw new Error("Database connection failed.");
  });

  return mongoose;
};

module.exports = { connection, mongoose };
