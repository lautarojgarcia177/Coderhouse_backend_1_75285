//const moment = require('moment');
import moment from 'moment'

// Fecha actual
const fechaActual = moment();

// Fecha de nacimiento
const fechaNacimiento = moment('7-12-1995', 'DD-MM-YYYY');

// Validar que la fecha de nacimiento sea válida
if (!fechaNacimiento.isValid()) {
    console.log("❌ La fecha de nacimiento no es válida");
} else {
    // Calcular diferencia en días
    const diasDesdeNacimiento = fechaActual.diff(fechaNacimiento, 'days');
    const secondsDesdeNacimiento = fechaActual.diff(fechaNacimiento, 'seconds');
    const yearsDesdeNacimiento = fechaActual.diff(fechaNacimiento, 'years');

    console.log("📅 Fecha actual:", fechaActual.format('YYYY-MM-DD'));
    console.log("🎂 Fecha de nacimiento:", fechaNacimiento.format('YYYY-MM-DD'));
    console.log(`🕒 Han pasado ${diasDesdeNacimiento} días desde tu nacimiento.`);
    console.log(`🕒 Han pasado ${secondsDesdeNacimiento} segundos desde tu nacimiento.`);
    console.log(`🕒 Han pasado ${yearsDesdeNacimiento} años desde tu nacimiento.`);
}