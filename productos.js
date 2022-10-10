const stockProductos = [
    {id:1 ,nombre:"Porta Celular", precio:2500, img:`../imagenes/portacelular.png`, cantidad:1},
    {id:2 ,nombre:"Cartera", precio:5000,img:`../imagenes/cartera.png`, cantidad:1},
    {id:3 ,nombre:"Mochila negra", precio:4500, img:`../imagenes/mochilanegra.png`, cantidad:1},
    {id:4 ,nombre:"Mochila marron", precio:4500, img:`../imagenes/mochilamarron.png`, cantidad:1},
    {id:5 ,nombre:"Llavero", precio:600, img:`../imagenes/llavero.png`, cantidad:1},
    {id:6 ,nombre:"Bandolera", precio:3500, img:`../imagenes/bandolera.png`, cantidad:1},
    {id:7 ,nombre:"Sobre", precio:2750, img:`../imagenes/sobre.png`, cantidad:1},
    {id:8 ,nombre:"Tarjetero", precio:1250, img:`../imagenes/tarjetero.png`, cantidad:1}
];

const contenedorProductos = document.getElementById(`contenedor-productos`)
const contenedorCarrito = document.getElementById(`carrito-contenedor`)
const botonVaciar = document.getElementById(`vaciar-carrito`)
const contadorCarrito = document.getElementById(`contadorCarrito`)
const precioTotal = document.getElementById(`precioTotal`)


let carrito = []

document.addEventListener(`DOMContentLoaded` , () => {
    if(localStorage.getItem(`carrito`))
    carrito = JSON.parse(localStorage.getItem(`carrito`))
    actualizarCarrito()
})



botonVaciar.addEventListener("click" , () => {
    carrito.length = 0
    actualizarCarrito(
    )
})

stockProductos.forEach((producto) => {
    const {img, nombre, precio, id} = producto
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-title">$${precio}</p>
            <button class= btn id=${id}>Comprar</button>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`${producto.id}`)
    boton.addEventListener("click" , () =>{
        agregarAlCarrito(producto.id)
    })


})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if(existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }else {
            const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push({
        ...item,
        cantidad: 1,
    })
    console.log(carrito);
    }
    actualizarCarrito()
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const {nombre, precio, cantidad, id}= prod
        const div = document.createElement("div")
        div.className = (`productoEnCarrito`)
        div.innerHTML = `
                <p>${nombre}</p>
                <p>Precio: ${precio}</p>
                <p>Cantidad: <span id="cantidad">${cantidad}</span></p>
                <button onclick="eliminarDelCarrito(${id})" class="boton-eliminar"><img class="img-carrito" src="../imagenes/basura.png"></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito` , JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc , prod) => acc + prod.precio, 0)
}