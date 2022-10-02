





















































/* let carrito = []

    //DOM

    let carritos = []

    const div = document.getElementById("div")
    const boton = document.getElementById("boton")

    
    productos.forEach(producto => {
        let productosredenrizado = document.createElement("div")
        productosredenrizado.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-title">$${producto.precio}</p>
                    <button class= btn id=${producto.id}>Comprar</button>
                
                </div>
        </div>
        `
        div.append(productosredenrizado)
        const boton = document.getElementById(producto.id)
        boton.addEventListener("click" , () => comprarProducto(producto))
        
    })

    const comprarProducto = (producto) => {
        let productoExiste = carritos.find(item => item.id === producto.id)
        if(productoExiste !== undefined){
            productoExiste.precio = productoExiste.precio + producto.precio
            productoExiste.cantidad = productoExiste.cantidad + 1
        }else{
            carritos.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
                cantidad: 1
            })
        }
    }

    boton.addEventListener("click" , () => console.log(carritos)) */


















































    /* let seleccion = prompt("Bienvenido a Limon CBA, ¿Desea comprar algun accesorio?")

while(seleccion != "si" && seleccion != "no"){
    alert("Ingrese si o no ")
    seleccion = prompt("Bienvenido a Limon CBA, Desea comprar algun accesorio?")
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
                    precio = 2500;
                    break;
                case "cartera":
                    precio = 5000;
                    break;
                case "mochila negra":
                    precio = 4500;
                    break;
                case "bandolera":
                    precio = 3500;
                    break;
                case "sobre":
                    precio = 2750;
                    break;
                case "tarjetero":
                    precio = 1250;
                    break;
                case "mochila marron":
                    precio = 4500;
                    break;
                case "llavero":
                        precio = 600;
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
 */