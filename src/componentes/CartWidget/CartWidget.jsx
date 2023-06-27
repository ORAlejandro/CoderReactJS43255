import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = '../public/images/carrito.png'
  return (
    <div>
        <img className='carritoImg' src={imgCarrito} alt="Imagen del Carrito" />
        <strong className='strongEstilo'> 7 </strong>
    </div>
  )
}

export default CartWidget