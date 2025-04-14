const Mauricio = {
    nombre: 'Mauricio',
    edad: 29,
}

const Tangero = {
    musica: 'tango',
    danza: 'milonga',
}

// Combinacion de dos objetos de forma rustica
const mauricioTanguero = {
    nombre: Mauricio.nombre,
    edad: Mauricio.edad,
    club: Mauricio.club,
    musica: Tangero.musica,
    danza: Tangero.danza,
}

// Combinacion de dos objetos de forma moderna
const mauricioTangueroModerno = {
    ...Mauricio,
    ...Tangero,
}
// Operador Destructure para extraer propiedades de un objeto
const { musica: musiquero, danza } = Tangero;

console.log(musiquero, danza);