function Persona (nombre, edad, direccion){
    this.nombre= nombre;
    this.edad= edad;
    this.direccion= direccion;
}
let nombre = prompt("ingrese su nombre")
let edad = prompt("ingrese su edad")
let direccion = prompt("ingrese su direccion")
const persona1 = new Persona (nombre, edad, direccion)

let mensaje = `${nombre} tiene ${edad} años y vive en ${direccion}`;

alert(mensaje);
alert("gracias por tu informacion");