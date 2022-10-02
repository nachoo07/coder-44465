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



let carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>Precio:$${producto.precio}</p>
    <button  id=${producto.id}>Comprar</button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`${producto.id}`)
    boton.addEventListener("click" , () =>{
        agregarAlCarrito(producto.id)
    })


})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito);
}


const actualizarCarrito = () => {

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})"></button>
        `
        contenedorCarrito.appendChild(div)
    })
}