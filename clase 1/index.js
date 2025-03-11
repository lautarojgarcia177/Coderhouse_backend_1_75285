let variable_let = {
    nombre: "Lautaro",
    edad: 22
};
const variable_const = {
    nombre: "Valentin",
    edad: 20
};

// Puedo modificar la referencia (mutar) de un let sin problemas
variable_let = {
    nombre: "Ezequiel",
    edad: 29
}
// NO puedo modificar la referencia (mutar) de una const.
// Este codigo comentado esta MAL
// variable_const = {
//     nombre: "Ezequiel",
//     edad: 29
// }

// SI puedo editar el interior de una referencia const, pero no la referencia misma
variable_const.edad = 21;

// ejemplo con array
array_const[2] = 1.1;
// Esto NO lo puedo hacer
// const array_const = [1, 2, 3, 4]