export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String,apellido: String, Img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = Img;
    }

} 