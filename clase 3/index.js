
/* let entrada = prompt("ingrese el usuario");

while(entrada != "andres"){
    alert("usuario incorrecto");

    entrada = prompt("ingrese el usuario");
}

alert("bienvenido;"); */

let entrada = Number(prompt("Ingrese el numero a calcular"));

while(entrada != 0){
    let num = Number(prompt("Ingrese el numero a operar"));
    let resultado = (entrada + num);
    let mensaje = `${entrada} + ${num} es ${resultado}`;
    alert(mensaje);
    entrada = Number(prompt("Ingrese el numero a calcular"));
}

alert("Usted a cerrado la calculadora");

