const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/database");
const Bus = require("./models/model");
const {ObjectID} = require("mongodb");


app.use(express.json());
app.post("/api",async(req,res)=>{
    try {
        const user = new  Bus(req.body);
        console.log(user);
        const result = await user.save();
        res.status(200).send(result);
        
    } catch (error) {
        res.status(404).send(error);
        console.log(error);
        
    }

})


app.get("/api",async(req,res)=>{
    try {
        const ress = await Bus.find();
        const ress1 = [ress];
        res.send(ress1);
        
    } catch (error) {
        res.send(error);
    }
})
app.get("/api/:id",async(req,res)=>{
    try {
        var id =  req.params.id;
        console.log(id);
        Bus.findById(id).then((e)=>{
            // console.log(e);
            const ee = [e];
            res.send(ee[0]);
        });
        
    } catch (error) {
        res.send(error);
    }
})
app.get("/api/:id/:buses",async(req,res)=>{
    try {
        var id =  req.params.id;
        console.log(id);
        Bus.findById(id).then((e)=>{
            // console.log(e);
            const ee = [e];
            res.send(ee[0].buses);
        });
        
    } catch (error) {
        res.send(error);
    }
})
app.get("/api/:id/:buses/:source",async(req,res)=>{
    try {
        var id =  req.params.id;
        console.log(id);
        Bus.findById(id).then((e)=>{
            // console.log(e);
            const ee = [e];
            res.send(ee[0].source);
        });
        
    } catch (error) {
        res.send(error);
    }
})
app.get("/api/:id/:buses/:source/:destination",async(req,res)=>{
    try {
        var id =  req.params.id;
        console.log(id);
        Bus.findById(id).then((e)=>{
            // console.log(e);
            const ee = [e];
            res.send(ee[0].destination);
        });
        
    } catch (error) {
        res.send(error);
    }
})




app.listen(port,()=>{
    console.log(`server is on at port ${port}`);
})