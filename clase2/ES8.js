const esMayor = (edad, club) => ({
    edad: edad ?? 0, // Operador nullish
    esMayor: edad >= 18 ? true : false, // Operador ternario 
    club: club || 'Boca' // operador OR lógico
});

// console.log(esMayor(20))
// console.log(esMayor(18))
// console.log(esMayor(17.9))

const pepito = esMayor(20, 0);
console.log(pepito.club);