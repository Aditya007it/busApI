const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/apiofbuses")
.then(()=>{console.log("Connection succesfull")}).catch((err)=>{console.log(err)});