const productos = [
    {nombre:"porta celular", precio:50, img:imagenes/portacelular.png},
    {nombre:"cartera", precio:788, img:imagenes/cartera.png},
    {nombre:"mochila negra", precio:698, img:imagenes/mochilanegra.png},
    {nombre:"mochila marron", precio:698, img:imagenes/mochilamarron.png},
    {nombre:"llavero", precio:100, img:imagenes/llavero.png},
    {nombre:"bandolera", precio:874, img:imagenes/bandolera.png},
    {nombre:"sobre", precio:566, img:imagenes/sobre.png},
    {nombre:"tarjetero", precio:500, img:imagenes/tarjetero.png}
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
                case "mochila negra":
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
                case "mochila marron":
                    precio = 698;
                    break;
                case "llavero":
                        precio = 100;
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
                alert(`Producto: ${carritoFinal.producto} Unidades: ${carritoFinal.unidades}
                Precio: $ ${carritoFinal.precio}
                Subtotal Producto: $ ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }   
    }
    const total = carrito.reduce((total, producto) => total + producto.precio * producto.unidades,0)
    alert (`El total a pagar por su compra es: $ ${total}`);



    productos.forEach((producto) => {
        let card = document.querySelector(".card")
        let div = document.createElement("div")

        div.innerHTML = `
        <img src="${productos.img}">
        <h5>${productos.nombre}</h5>
        <button class=".btn">Agregar al Carrito</button>
        `
        div.classname = ".card1"
        card.append(div)
    })


/*     <div class="card" style="width: 18rem;">
    <img src="../imagenes/llavero.png" class="card-img-top" alt="...">
    <div class="card-body card-title">
    <h5>Llavero Limon</h5>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div> */



/*     <p>$${productos.precio}</p> */


