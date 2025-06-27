import express from 'express';
const app=express()

app.get("/",(req,res)=>{
  res.send("server runs sucessfully")
})

app.listen(2000,()=>{
  console.log("sevrer started at http://localhost:2000");
})