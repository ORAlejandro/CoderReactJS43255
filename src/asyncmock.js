const allProductos = [
    { id: "1", nombre: "Auricular Gaming Blue", stock:30, precio: 11500, img: "../images/auriculares/auricular1.png", idCategoria: "auricular" },
    { id: "2", nombre: "Auricular Gaming Red", stock:30, precio: 14100, img: "../images/auriculares/auricular2.png", idCategoria: "auricular" },
    { id: "3", nombre: "Auricular Gaming Black TT", stock:30, precio: 19250, img: "../images/auriculares/auricular3.png", idCategoria: "auricular" },
    { id: "4", nombre: "Auricular Antra Blue", stock:30, precio: 15250, img: "../images/auriculares/auricular4.png", idCategoria: "auricular" },
    { id: "5", nombre: "Gabinete Black RGB Solid", stock:30, precio: 21500, img: "../images/gabinetes/gabinete1.png", idCategoria: "gabinete" },
    { id: "6", nombre: "Gabinete A3 Red", stock:30, precio: 33500, img: "../images/gabinetes/gabinete2.png", idCategoria: "gabinete" },
    { id: "7", nombre: "Gabinete Spirit Gamer Blue", stock:30, precio: 26500, img: "../images/gabinetes/gabinete3.png", idCategoria: "gabinete" },
    { id: "8", nombre: "Gabinete Black and Red", stock:30, precio: 19000, img: "../images/gabinetes/gabinete4.png", idCategoria: "gabinete" },
    { id: "9", nombre: "Monitor 19' Plano", stock:30, precio: 54500, img: "../images/monitores/monitor1.png", idCategoria: "monitor" },
    { id: "10", nombre: "Monitor 22' Curvo", stock:30, precio: 131000, img: "../images/monitores/monitor2.png", idCategoria: "monitor" },
    { id: "11", nombre: "Monitor 21' Plano V", stock:30, precio: 77500, img: "../images/monitores/monitor3.png", idCategoria: "monitor" },
    { id: "12", nombre: "Monitor 24' WS", stock:30, precio: 97500, img: "../images/monitores/monitor4.png", idCategoria: "monitor" },
    { id: "13", nombre: "Mouse Asus Red", stock:30, precio: 21400, img: "../images/mouse/mouse1.png", idCategoria: "mouse" },
    { id: "14", nombre: "Mouse Razer", stock:30, precio: 33200, img: "../images/mouse/mouse2.png", idCategoria: "mouse" },
    { id: "15", nombre: "Mouse Red Dragon", stock:30, precio: 16500, img: "../images/mouse/mouse3.png", idCategoria: "mouse" },
    { id: "16", nombre: "Mouse Logitech", stock:30, precio: 22400, img: "../images/mouse/mouse4.png", idCategoria: "mouse" },
    { id: "17", nombre: "Teclado Mecanico Asus", stock:30, precio: 29250, img: "../images/teclados/teclado1.png", idCategoria: "teclado" },
    { id: "18", nombre: "Teclado Asus Reduce", stock:30, precio: 31200, img: "../images/teclados/teclado2.png", idCategoria: "teclado" },
    { id: "19", nombre: "Teclado Mecanico Ekko", stock:30, precio: 14500, img: "../images/teclados/teclado3.png", idCategoria: "teclado" },
    { id: "20", nombre: "Teclado RGB Multimedia", stock:30, precio: 22700, img: "../images/teclados/teclado4.png", idCategoria: "teclado" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(allProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = allProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getCategoria = (idCat) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = allProductos.filter(prod => prod.idCategoria === idCat)
            resolve(productosCategoria);
        }, 100)
    })
}