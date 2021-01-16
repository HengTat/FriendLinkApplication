const express= require ('express');
const mongoose = require('mongoose');
const app = express();
require ('dotenv/config');
const updateRoute= require('./routes/update');
const friendRoute = require("./routes/friend");
const bodyParser = require('body-parser');
var cors = require("cors");

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use('/update',updateRoute);
app.use("/friend", friendRoute);

mongoose.connect(
  process.env.DB_CONNECTION,{useNewUrlParser: true}, ()=> console.log('connected to mongodb')
);

app.listen(3000);  