import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const handlerCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("Productos agregados:" + cantidad);
    }

    return (
        <div className='divDetail'>
            <h2 className="h2Detail">{nombre} </h2>
            <img className="imgDetail" src={img} alt={nombre}/>
            <h3 className="h3Detail">Precio con Tarjeta: {precio}</h3>
            <h5 className="h5Detail">ID Producto:{id}</h5>

            {
                agregarCantidad > 0 ? (<Link to={"/cart"}> Finalizar Compra</Link>) : (<ItemCount stock={stock} inicial={1} funcionAgregar={handlerCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail