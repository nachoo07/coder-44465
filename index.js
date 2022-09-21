const productos = [
    {nombre:"porta celular", precio:50},
    {nombre:"cartera", precio:788},
    {nombre:"mochila", precio:698},
    {nombre:"billetera", precio:874},
    {nombre:"sobre", precio:566},
    {nombre:"tarjetero", precio:500}
];


let carrito = []

let seleccion = prompt("Bienvenido a Pipeope, ¿Desea comprar algun accesorio?")

while(seleccion != "si" && seleccion != "no"){
    alert("Ingrese si o no ")
    seleccion = prompt("Bienvenido a Pipeope, Desea comprar algun accesorio?")
}
    if(seleccion == "si"){
        alert ("le mostrare la lista de producto")
        let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
        alert (todoslosProductos.join("#"))
    } else if(seleccion == "no"){
        alert("muchas gracias por su tiempo, lo esperamos pronto en nuestra tienda");
    }

    while (seleccion != "no"){
        let producto = prompt ("Agregá un producto a tu carrito");
        let precio = 0;
    
        if (producto){
            switch (producto){
                case "porta celular":
                    precio = 50;
                    break;
                case "cartera":
                    precio = 788;
                    break;
                case "mochila":
                    precio = 698;
                    break;
                case "billetera":
                    precio = 874;
                    break;
                case "sobre":
                    precio = 566;
                    break;
                case "tarjetero":
                    precio = 500;
                    break;
                default:
                    break;
            }
            let unidades = parseInt (prompt ("Ingrese la cantidad de unidades"))
        
            carrito.push({producto, unidades, precio})
            console.log(carrito);
        }else {
            alert ("Producto sin stock")
        }
        seleccion = prompt ("¿Desea seguir comprando?")

        while (seleccion === "no"){
            alert ("Gracias por elegirnos, éste es el resumen de su compra:")
            carrito.forEach(carritoFinal =>{
                alert(`Producto: ${carritoFinal.producto},Unidades: ${carritoFinal.unidades},
                Precio: $ ${carritoFinal.precio}
                , Subtotal Producto: $ ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }   
    }
    const total = carrito.reduce((total, producto) => total + producto.precio * producto.unidades,0)
    alert (`El total a pagar por su compra es: $ ${total}`);





