const express = require('express')
var http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require("./routes/productRoute")


const app = express()
const mongodbUrl = 'mongodb+srv://raju_r:Raju@2255@buynsell.a82fz.mongodb.net/BuyNSell?retryWrites=true&w=majority';
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongodbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,

}).catch((error)=> console.log("connected"));

app.use('/api/product', productRoute);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(5000, () => {console.log(`server started at http://localhost:5000`)})