const mongoose = require("mongoose");

const schmaa = new mongoose.Schema({
    source:{
        type:String
    },
    destination:{
        type:String
    },
    buses:[
        {number:{type:Number},
        time:{type:String}
    }],
    time:{
        type:String
    }
    
})

const Bus = new mongoose.model("Bus",schmaa);

module.exports = Bus;