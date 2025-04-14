/* 
Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.
*/

function mostrarLista(arr) {
    if (!arr.length) {
        return "Lista vacia";
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    return `La longitud de la lista es ${arr.length}`
}

const mostrarListaFlecha = (arr) => {
    if (!arr.length) {
        return "Lista vacia";
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    return `La longitud de la lista es ${arr.length}`
}
const resultadoFunction = mostrarLista([]);
const resultadoFlecha = mostrarListaFlecha([]);

console.log(resultadoFunction == resultadoFlecha)