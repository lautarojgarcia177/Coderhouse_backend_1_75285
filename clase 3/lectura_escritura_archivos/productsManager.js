const fs = require('fs')
const path = require('path');

const pathProductos = path.join(__dirname, 'productos.json');

function getProducts() {
    const productos = fs.readFileSync(pathProductos, 'utf-8');
    return JSON.parse(productos);
}

function getProductById(pid) {
    const productos = getProducts();
    return productos.find(producto => producto.id === pid)
}

function addProduct(product) {
    const productos = getProducts();
    productos.push(product);
    fs.writeFileSync(pathProductos, JSON.stringify(productos));
}

function updateProduct(pid, updated) {
    const productos = getProducts();
    productos[pid - 1] = updated;
    fs.writeFileSync(pathProductos, JSON.stringify(productos));
}

function deleteProduct(pid) {
    let productos = getProducts();
    productos = productos.filter(product => product.id !== pid);
    fs.writeFileSync(pathProductos, JSON.stringify(productos));
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}