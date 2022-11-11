class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(p_nombre, p_autor){
        let nuevoLibro = {nombre: p_nombre, autor: p_autor};
        this.libros.push(nuevoLibro);
    }

    getBookNames(){
        let result = this.libros.map(a => a.nombre);
        return result;
    }

}


// Creando el nuevo usuario
let libro1 = {nombre: '1984', autor: 'George Orwell'};
let libro2 = {nombre: 'Fahrenheit 451', autor: 'Ray Bradbury'};

const usuarioEjemplar = new Usuario('Tomas', 'Riera', [libro1, libro2], ['Rocky','Lola']);


//Imprimiendo el nombre completo
console.log(usuarioEjemplar.getFullName());

//Agregando una mascota e imprimiendo la cantidad total
usuarioEjemplar.addMascota('Coco');
console.log('Cantidad de mascotas: ' + usuarioEjemplar.countMascotas());

//Agregando un libro e imprimiendo los nombres
usuarioEjemplar.addBook('Un mundo feliz', 'Aldous Huxley');
console.log(usuarioEjemplar.getBookNames());