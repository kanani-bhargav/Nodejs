const express = require("express"); //importing express module
const http=require("http")
const bodyParser = require("body-parser"); //importing body-parser
const category = require("./models/index"); // * importing models *//
const { connectDB } = require("./db/dbConnection"); //importing connectdb
const config = require("./config/config"); //importing config
const routes = require("./routes/v1");

// Initializing express
const app = express();
/*
 * allow form-data from body
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB();

// Following block of code will be run when landing on http://localhost:3200/
/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`server listning port number ${config.port}!`);
});
