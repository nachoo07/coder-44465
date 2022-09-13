
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let portaCelular = 500;
let cartera = 600;
let mochila = 1000;
let billetera = 200
let descuento = 100

let nuevoPrecioPortaCelular = resta(suma (portaCelular, iva(portaCelular)), descuento);
console.log(nuevoPrecioPortaCelular);

let nuevoPrecioCartera = resta(suma (cartera, iva(cartera)), descuento);
console.log(nuevoPrecioCartera);

let nuevoPrecioMochila = resta(suma (mochila, iva(mochila)), descuento);
console.log(nuevoPrecioMochila);

let nuevoPrecioBilletera = resta(suma (billetera, iva(billetera)), descuento);
console.log(nuevoPrecioBilletera);

