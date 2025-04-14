// Una clase se compone de 3 partes
class Persona {
    // Campos
    #nombre;
    #edad;
    #genero;
    #club = 'Boca';
    static poblacion = 0;

    // Constructor
    constructor(nombre, edad, genero, club) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.club = club;
        Persona.poblacion++;
    }

    // Metodos
    cumplirAnios() {
        this.edad++;
    }
    cambiarseDeClub(club) {
        this.club = club;
    }
    esMismaInstancia(instancia) {
        return this === instancia;
    }
    getNombre(nombre) {
        return this.nombre;
    }
    getEdad(edad) {
        return this.edad;
    }
}

const mauricio = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio2 = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio3 = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio4 = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio5 = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio6 = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio7 = new Persona('Mauricio', 29, 'Masculino', 'River');
const mauricio8 = new Persona('Mauricio', 29, 'Masculino', 'River');

console.log(Persona.poblacion);