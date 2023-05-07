import express,{ Application,Request,Response } from "express";
import bodyParser from "body-parser";

const PORT=process.env.PORT||3000;
const app:Application =express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{res.send("Connected")});

app.listen(PORT,()=>{
    console.log("connected",PORT);
})