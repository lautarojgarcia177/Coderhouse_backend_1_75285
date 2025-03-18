class Contador {
    nombre;
    cuentaIndividual;
    static cuentaGlobal = 0;
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaIndividual = 0;
    }
    getResponsable() {
        return this.nombre;
    }
    contar() {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }
    getCuentaIndividual() {
        return this.cuentaIndividual;
    }
    getCuentaGlobal() {
        return Contador.cuentaGlobal;
    }
}

const contador1 = new Contador('Lautaro');
const contador2 = new Contador('Agustin');

console.log(contador1 === contador2)
