const http=require('http')
const express=require('express')
const config=require('./config/config')
const bodyParser=require('body-parser')
const { connectDB } = require('./db/dbConnection')
const routes=require('./routes/v1')
const cors = require("cors");

const app=express()
/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

/** enable cors */
app.use(cors());
app.options("*", cors());

/** Get image */
app.use(express.static(`${__dirname}/public`));

app.use('/v1',routes)

app.use((req,res,next)=>{
    next (new Error('route not found'))
})
connectDB()

const server=http.createServer(app)

server.listen(config.port,()=>{
    console.log(`server is listining on port => ${config.port}`);
})