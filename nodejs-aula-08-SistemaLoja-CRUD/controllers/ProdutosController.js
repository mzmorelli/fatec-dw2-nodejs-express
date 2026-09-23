import express from 'express';
const route = express.Router();
import Produto from '../models/Produto.js';

// ROTA PRODUTOS
route.get("/produtos",function(req,res){
    Produto.findAll().then(produtos => {
        res.render("produtos", {
         produtos: produtos
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os produtos: ${error}`);
    })
    });
})

export default route;