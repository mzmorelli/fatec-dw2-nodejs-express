import express from 'express';
const route = express.Router();
import Cliente from "../models/Cliente.js"

// ROTA CLIENTES
route.get("/clientes",function(req,res){
    // Selecionando todos os clientes do banco de dados
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            // Enviando a lista de clientes para a página HTML
            clientes : clientes
        })
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clientes: ${error}`);
    });
})

export default route;