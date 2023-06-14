const allProductos = [
    { id: 1, nombre: "Auricular Gaming Blue", precio: 11500, img: "./images/auriculares/auricular1.png" },
    { id: 2, nombre: "Auricular Gaming Red", precio: 14100, img: "./images/auriculares/auricular2.png" },
    { id: 3, nombre: "Auricular Gaming Black TT", precio: 19250, img: "./images/auriculares/auricular3.png" },
    { id: 4, nombre: "Auricular Antra Blue", precio: 15250, img: "./images/auriculares/auricular4.png" },
    { id: 5, nombre: "Gabinete Black RGB Solid", precio: 21500, img: "./images/gabinetes/gabinete1.png" },
    { id: 6, nombre: "Gabinete A3 Red", precio: 33500, img: "./images/gabinetes/gabinete2.png" },
    { id: 7, nombre: "Gabinete Spirit Gamer Blue", precio: 26500, img: "./images/gabinetes/gabinete3.png" },
    { id: 8, nombre: "Gabinete Gamer Black and Red", precio: 19000, img: "./images/gabinetes/gabinete4.png" },
    { id: 9, nombre: "Monitor 19' Plano", precio: 54500, img: "./images/monitores/monitor1.png" },
    { id: 10, nombre: "Monitor 22' Curvo", precio: 131000, img: "./images/monitores/monitor2.png" },
    { id: 11, nombre: "Monitor 21' Plano V", precio: 77500, img: "./images/monitores/monitor3.png" },
    { id: 12, nombre: "Monitor 24' WS", precio: 97500, img: "./images/monitores/monitor4.png" },
    { id: 13, nombre: "Mouse Asus Red", precio: 21400, img: "./images/mouse/mouse1.png" },
    { id: 14, nombre: "Mouse Razer", precio: 33200, img: "./images/mouse/mouse2.png" },
    { id: 15, nombre: "Mouse Red Dragon", precio: 16500, img: "./images/mouse/mouse3.png" },
    { id: 16, nombre: "Mouse Logitech", precio: 22400, img: "./images/mouse/mouse4.png" },
    { id: 17, nombre: "Teclado Mecanico Asus", precio: 29250, img: "./images/teclados/teclado1.png" },
    { id: 18, nombre: "Teclado Mecanico Asus S/Num", precio: 31200, img: "./images/teclados/teclado2.png" },
    { id: 19, nombre: "Teclado Mecanico Ekko", precio: 14500, img: "./images/teclados/teclado3.png" },
    { id: 20, nombre: "Teclado Mecanico RGB Multimedia", precio: 22700, img: "./images/teclados/teclado4.png" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(allProductos);
        }, 2000)
    })
}