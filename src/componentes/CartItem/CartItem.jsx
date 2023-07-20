import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
    const {deleteProduct} = useContext(CartContext)

  return (
    <div>
        <h3>Producto: {item.nombre}</h3>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        <button className="btnCartItem" onClick={() => deleteProduct(item.id)}> Eliminar </button>
        <hr/>
    </div>
  )
}

export default CartItem