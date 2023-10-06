const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    .connect(config.mongoDB.url, config.mongoDB.options)
    .then((data) => {
      console.log(`database connect successfully`);
    })
    .catch((error) => {
      console.log(`database connection error`, error);
    });
};
module.exports = {
  connectDB,
};
