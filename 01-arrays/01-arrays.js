
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    
    // create new array empty
    let newArray = [];
    // go over first array
    for (let i = 0; i < array.length; i++){
    // turn the number to string and check if the length of the number is 1
        if (array[i].toString().length === 1) {
    // insert value to first position
            newArray.unshift(array[i])
        }

    }
    return newArray;
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    // create new array empty
    let newArr = [];
    // go over array1
    for (let i = 0; i < array1.length; i++) {
    // go over array2
        for (let j = 0; j < array2.length; j++) {
    // check if both are equal
            if (array1[i] === array2[j])
    // give back array1
                return array1[i];
    // add it to empty array
            newArr.push(array1[i]);
        }
    }
    return newArr;
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

    // create new empty array

};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};