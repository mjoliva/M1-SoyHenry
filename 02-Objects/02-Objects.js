// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:

      // define titulo
      this.titulo = titulo;
      // define autor 
      this.autor = autor;
      // define traducciones
      this.traducciones = traducciones;
    
      
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      
      // return titulo
      return this.titulo;
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      
      // return autor
      return this.autor;
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      
      // create obj with idioma and editorial
      let objeto = {
        idioma : idioma,
        editorial : editorial,
      }
      // add obj to traducciones
      this.traducciones.push(objeto);
      

    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      
      // create empty traducciones
      let traducciones = []
      // go over traducciones
      for (let i = 0; i < this.traducciones.length; i++) {
      // create idioma var filtering by idioma
        let idioma = this.traducciones[i]['idioma']
      // add idioma to traducciones
      traducciones.push(idioma)
      }
      // return traducciones
      return traducciones
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      
      // return traducciones's amount
      return this.traducciones.length;
    }
  }

  return Libro;
}

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.

  // create empty var info
  let info = [];
  // go over obj staff
  for (let i in objeto.staff) {
  // add the name into info
    info.push('The ' + i + ' is ' + objeto.staff[i].name)
  }
  // return new info var
  return info;
  
};

module.exports = { crearClaseLibro, printStaff };
