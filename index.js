const express = require('express')
require("dotenv").config();
const app = express()
const connectDB = require("./config/dbConfig");
const cors = require('cors')

connectDB();
// const port = process.env.PORT || 3000;


const corsOptions = {
    origin: 'https://pathbeatassignment.netlify.app/', // Allow only this origin http://localhost:3000
  };

app.use(cors(corsOptions));
app.use("/data", require("./routes/dataRoutes"));

app.listen(5000,()=>{
    console.log("Server Started")
})