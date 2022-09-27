const productos = [
    {nombre:"Porta Celular", precio:50, img:`../imagenes/portacelular.png`},
    {nombre:"Cartera", precio:788,img:`../imagenes/cartera.png`},
    {nombre:"Mochila negra", precio:698, img:`../imagenes/mochilanegra.png`},
    {nombre:"Mochila marron", precio:698, img:`../imagenes/mochilamarron.png`},
    {nombre:"Llavero", precio:100, img:`../imagenes/llavero.png`},
    {nombre:"Bandolera", precio:874, img:`../imagenes/bandolera.png`},
    {nombre:"Sobre", precio:566, img:`../imagenes/sobre.png`},
    {nombre:"Tarjetero", precio:500, img:`../imagenes/tarjetero.png`}
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

    const div = document.getElementById("div")
    
    productos.forEach(producto => {
        let productosredenrizado = document.createElement("div")
        productosredenrizado.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-title">$${producto.precio}</p>
                    <a class="btn btn-primary">COMPRAR</a>
                </div>
        </div>
        `
        div.append(productosredenrizado)
    })




