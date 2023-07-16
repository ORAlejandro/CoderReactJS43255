import { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, total, totalAmount } = useContext(CartContext);

    if (totalAmount === 0) {
        return (
            <>
                <h2 className="h2CartEmpty">Tu carrito está vacio</h2>
                <Link className="linkCart" to="/">Seguir Comprando</Link>
            </>
        )
    }
    return (
        <div>
            <h2 className="h2Cart">Tu carrito de compra</h2>
            {cart.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total}</h3>
            <h4>Cantidad Total: {totalAmount}</h4>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}

export default Cart