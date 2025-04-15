const fs = require('fs').promises;
const path = require('path');
const pathProductos = path.join(__dirname, 'products.json');

let productos = []

// listar todos los productos
async function getProducts() {
    const data = await fs.readFile(pathProductos, 'utf-8');
    productos = JSON.parse(data);
}

// obtener producto por ID
async function getProductById(pid) {
    await getProducts();
    return productos.find(producto => producto.id === pid);
}

// agregar un nuevo producto(ID autogenerado)
async function addProduct(obj) {

}

// actualizar campos de un producto(sin modificar el ID)
async function updateProduct(pid, updateFields) {

}

// eliminar producto por ID
async function deleteProduct(pid) {

}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}