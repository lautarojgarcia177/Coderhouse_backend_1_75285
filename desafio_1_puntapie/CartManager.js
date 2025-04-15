const fs = require('fs').promises;
const path = require('path');
const pathCarritos = path.join(__dirname, 'cart.json');
const ProductManager = require('./ProductManager.js');

let carritos = [];

async function getCarts() {
    const data = await fs.readFile(pathCarritos, 'utf-8');
    carritos = JSON.parse(data);
}

// crear un nuevo carrito(ID autogenerado)
async function createCart() {
}


// listar productos de un carrito
async function getCartById(cid) {
    await getCarts();
    return carritos.find(carrito => carrito.id === cid);
}


// agregar producto al carrito, incrementando cantidad si ya existe
async function addProductToCart(cid, pid) {
    const carrito = await getCartById(cid);
    carrito.productos.push(pid);
    await fs.writeFile(pathCarritos, JSON.stringify(carritos, null, 2))
    return carrito;
}

// Retornar un objeto con el detalle de todos los productoos que se encuentran en un carrito
async function getCartProducts(cid) {
    const { productos } = await getCartById(cid);
    let detallesProductos = [];
    for (let productoId of productos) {
        const detalleProducto = await ProductManager.getProductById(productoId);
        detallesProductos.push(detalleProducto);
    }
    return detallesProductos;
}

module.exports = {
    createCart,
    getCartById,
    addProductToCart,
    getCartProducts,
}