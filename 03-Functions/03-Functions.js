function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

// condition the time
if (
// if the last element is equal to AM
    time.slice(-2) === 'AM' &&
// and hours minor than 13
    parseInt(time.slice(0, 2), 10) < 13 &&
// and minuts minot than 60
    parseInt(time.slice(3, 5), 10) < 60 &&
// and seconds minor to 60
    parseInt(timw.slice(6, 8) 10) < 60
) {
// nest the condition by part and been equal  to 12
    if (time.slice(0, 2) === '12') {
        return '00' + time.slice(2, 8);
    }

}
}

module.exports = {
    timeConversion
}