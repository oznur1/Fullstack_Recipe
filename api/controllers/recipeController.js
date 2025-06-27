import { readRecipes, writeRecipes } from "../model/recipeModel.js";
import crypto from "crypto";
import isInValid from "../utils/isInValid.js";
import { write } from "fs";

const data=readRecipes();

export const getAllRecipes=(req,res)=>{
    //tarif verisinin bir kopyasını oluştur
let recipes=[...data];

    //aratılan kelime
    const search=req.query?.search.toLowerCase();

    //eğer search parametresi geldiyse filtreleme yap
    if(search){
    data.filter((recipe)=>
    recipe.recipeName.toLowerCase().includes(search))

    }
    
    //clienta cevap gönder
    res.status(200).json({
        status:"success",
        results:data.length,
        recipes:data,
    });
};

export const createRecipe=(req,res)=>{
    //1)isteğin body bölümünde gelen veriye eriş
  const newRecipe=req.body;

    //2)veri bütünlüğünü kontrol et
if (isInValid(newRecipe)) {
    return res
      .status(404)
      .json({ message: "Lütfen bütün değerleri tanımlayın" });
  }

    //3)veriye id ekle
  newRecipe ={...newRecipe, id:crypto.randomUUID(),
    photo:`https://picsum.photos/seed/${crypto.randomUUID()}/500/500`,
  }

    //4)tarif verisini diziye ekle
    data.push(newRecipe);

    //5)json dosyasını güncelle
 writeRecipes(data);
    
    //6)cevap gönder
     res.status(201).json({ message: req.__("newRecipe"), recipe: newRecipe });
};

export const getRecipe=(req,res)=>{
    res .status(200)
    .json ({message: "aradığınız tarif bulundu",found:req.foundRecipe})

};

export const  deleteRecipe=(req,res)=>{
    //silinecek sırasını bul
 const index= data.findIndex(i=>i.id===req.params.id)

    //elemanı diziden kaldır
    data.splice(index,1);

    //json dosyasını güncelle
    writeRecipes(data)

    //cevap gönder
    res.status(204);
};

export const uptadeRecipe=(req,res)=>{
    //eski tarif nesnesini güncelle
    const updated={...req.foundRecipe,...req.body};

    //güncellenecek elemanın sırasını bul
    const index=data.findIndex((i)=>i.id===req.params.id);

    //diziyi güncelle
    data.splice(index,i,updated);

    //json dosyasını güncelle
    writeRecipes(data);

    //cevap gönder
    res.status(200)
    .json({
        message:"tarif başarıyla güncellendi",
        recipe:updated,
    })
};
