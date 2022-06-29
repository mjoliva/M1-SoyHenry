function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

// condition the time
    if (
// if the last element is equal to AM and
        time.slice(-2) === 'AM' &&
// hours minor than 13 and
        parseInt(time.slice(0, 2), 10) < 13 &&
// minuts minot than 60 and
        parseInt(time.slice(3, 5), 10) < 60 &&
// seconds minor to 60
        parseInt(time.slice(6, 8), 10) < 60
    ) {
// nest the condition by part and been equal  to 12
        if (time.slice(0, 2) === '12') {
// return '00' plus the rest of minuts and seconds
            return '00' + time.slice(2, 8);
        } else {
// if isnt 12 return the full time
            return time.slice(0, 8);
        }
    } else {
    if (
// if the last element is equal to PM and
        time.slice(-2) === 'PM' &&
// hours minor than 13 and
        parseInt(time.slice(0, 2), 10) < 13 &&
// minuts minot than 60 and
        parseInt(time.slice(3, 5), 10) < 60 &&
// seconds minor to 60
        parseInt(time.slice(6, 8), 10) < 60
    ) {
// create an hour var and plus it '12'
        let hour = parseInt(time.slice(0, 2), 10) + 12;
// if the hour is '24' turn it into '12'
        if( hour === 24) {
            hour = '12';
        }
// return the new hour plus minuts and seconds
        return hour + time.slice(2, 8);
    }
// if it isnt any option reutrn false
    return false;
    }
}

module.exports = {
    timeConversion
}