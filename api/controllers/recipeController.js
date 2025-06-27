import { readRecipes } from "../model/recipeModel.js";


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

export const createRecipe=(req,res)=>{};

export const getRecipe=(req,res)=>{};

export const  deleteRecipe=(req,res)=>{};

export const uptadeRecipe=(req,res)=>{};
