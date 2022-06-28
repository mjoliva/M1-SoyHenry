
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
    // insert value to first position in empty array
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
    // define equals elements
    let equalNumbers;
    // define array1 minor element
    // let array1MinorElement;
    // define array2 minor element
    // let array2MinorElement;

    // go over array1
    for (let i = 0; i < array1.length; i++) {
    // go over array2
        for (let j = 0; j < array2.length; j++) {
    // check if any element is equal give back array1 to empty array
            while (array1[i] === array2[j]) {
    // return equal and add it to equalNumbers
                return equalNumbers = array1[i]
            } 
   // if it isnt equal elements
    /*        if (equalNumbers === undefined) {
                return 'no hay numero comun'
            }
    // search the minor element in array1 
                /*if(array1[0] > array1[i]) {
    // define array1MinorElement as the minor element
                    array1MinorElement = array1[i]
                } else {
                    array1MinorElement = array1[0]
                }
    // search the minor element in array2
                if(array2[0] > array2[i]) {
    // define array2MinorElement as the minor element
                    array2MinorElement = array2[i]
                } else {
                    array2MinorElement = array2[0]
                }
    // if array1 min element is minor than array2 min element return it
                if (array1MinorElement < array2MinorElement) {
                    newArr.push(array1MinorElement)
    // if array2 min element is minor than array1 min element return it
                } else {
                    newArr.push(array2MinorElement)
                }*/
            
    // add it to empty array
            newArr.push(equalNumbers);   
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
    let newArray = [];
    // go over array 
    for (let i = 0; i < array.length; i++) {
    // check if 'i' its an object
        if (typeof array[i] === 'object') {
    // create a sum variable
            var suma = 0;
    // take every element in the object
            array[i].forEach(elemento => {
    // and add it in the sum variable
                suma = suma + elemento
            })
    // insert the sum variable to the new array
            newArray.push(suma);
    // when 'i' isnt an object
        }
        else{
    // just add the element of the array to the new array
            newArray.push(array[i])
        }
    }
    return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    // create new empty array
    let newArray = [];   
    // create an array to the result of the division
    let result = numero / divisor
    // if the result of the division is not an integer, it must return false
    if (numero % divisor !== 0) {
        return false
    // when it is an integer
    } else {
    // insert the result in the empty array
        newArray.push(result)
    }
    return newArray;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
    // create new empty array
    let newArr = []; 
    // define minor element
    let minorElement;
    // define major element
    let majorElement;
    // go over array
    for (let i = 0; i < array.length; i++) {
    // if element 0 is major than i element
        if (array[0] > array[i]) {
    // define i as the minor element
            minorElement = array[i]
        } else {
            minorElement = array[0]
        }
    // if element 0 is minor than i element
        if (array[0] < array[i]) {
    // define i as the major element
            majorElement = array[i]
        }
    }
    // add the minor and major element to the new array
    newArr.push(minorElement)
    newArr.push(majorElement)
    return newArr; 
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};