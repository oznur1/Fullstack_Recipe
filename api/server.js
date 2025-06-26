
 //const express=require("express") //eski nesil

 import express from "express" //yeni nesi type:module yaparsan olur
 import cors from "cors"
 import recipeRouter from "./routes/recipeRoutes.js"

// express kurulumu
 const app=express()
 const port =4004

 //cors hatalarını önleyen mw(otamatik header ekler)
 app.use(cors())

 //bodydeki json verilerini çeviren 
 app.use(express.json());


// tarifler için curd operasyonları gerçekleştireceğimiz endpointleri tanımla

app.use(recipeRouter);



 //dinlenecek portu belirle
 app.listen(port,()=>{
    console.log(`Server ${port} portunda çalışmaya başladı`)
 })