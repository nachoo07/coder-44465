const productos = [
    {id: 1, nombre:"porta celular", precio:50},
    {id: 2, nombre:"cartera", precio:788},
    {id: 3, nombre:"mochila", precio:698},
    {id: 4, nombre:"billetera", precio:874},
    {id: 5, nombre:"sobre", precio:566},
    {id: 6, nombre:"tarjetero", precio:500},
];

const elementos = [
    "Porta celular " ,
    "Cartera ",
    "Mochila ",
    "Billetera ",
    "Sobre ",
    "Tarjetero ",
];
alert(elementos)

let nombre = prompt("ingrese el nombre del producto");

let encontrado = productos.find((ropa) => ropa.nombre === nombre);
let mostrar = `El accesorio ${encontrado.nombre} tiene un precio de $${encontrado.precio}`;

alert(mostrar);
