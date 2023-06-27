import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='divDetail'>
            <h2 className="h2Detail">{nombre} </h2>
            <img className="imgDetail" src={img} alt={nombre}/>
            <h3 className="h3Detail">Precio con Tarjeta: {precio}</h3>
            <h4 className="h4Detail">Precio en Efectivo: {precio * 0.75}</h4>
            <h5 className="h5Detail">ID Producto: {id}</h5>
            <ItemCount stock={10} inicial={1}/>
        </div>
    )
}

export default ItemDetail