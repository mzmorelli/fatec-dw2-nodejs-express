import express from 'express';
const route = express.Router();
import Pedido from '../models/Pedido.js';

// ROTA PEDIDOS
route.get("/pedidos",function(req,res){
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos
    })
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os pedidos: ${error}`);
    })
})

export default route;