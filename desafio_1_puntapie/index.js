const ProductManager = require('./ProductManager.js');
const CartManager = require('./CartManager.js');

async function main() {
   // await CartManager.addProductToCart('000002', '0000003');
   // await CartManager.addProductToCart('000002', '0000002');
   const detalleCarrito = await CartManager.getCartProducts('000002');
   console.log(detalleCarrito);
}

main();