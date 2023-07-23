import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart, totalAmount, total } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handlerForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !confirmEmail) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== confirmEmail) {
            setError("Los emails son distintos");
            return;
        }

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: totalAmount,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const currentlyStock = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: currentlyStock - productoOrden.cantidad
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        clearCart();
                    })
                    .catch((error) => {
                        console.log("Hubo un error al intentar crear la orden", error);
                        setError("Hubo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.log("Error al intentar actualizar el stock.", error);
                setError("Error al actualizar el stock. Intente nuevamente");
            })

    }


    return (
        <div>
            <h2 className="styleCheckout">Resumen de tu Compra</h2>
            <hr />
            <form onSubmit={handlerForm}>
                <div className="flexResumen">
                    {cart.map(producto => (
                        <div key={producto.id} className="contenedorProducto">
                            <p>Producto: <span className="spanBold">{producto.item.nombre}</span></p>
                            <p>Cantidad: <span className="spanBold">{producto.cantidad}</span></p>
                            <p><span className="spanBold">${producto.item.precio}</span></p>
                        </div>
                    ))}
                    <p className="spanBold styleTotal">Total: ${total}</p>
                </div>
                <hr />

                <h3 className="styleCheckout">¡Tu compra está casi lista!</h3>
                <hr />

                <div className="styleForm">
                    <label className="styleLabel" htmlFor="nombre">Nombre</label>
                    <input className="styleInput" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label className="styleLabel" htmlFor="apellido">Apellido</label>
                    <input className="styleInput" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label className="styleLabel" htmlFor="telefono">Telefono</label>
                    <input className="styleInput" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    <label className="styleLabel" htmlFor="email">Email</label>
                    <input className="styleInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label className="styleLabel" htmlFor="emailConfirmacion">Confirmación Email</label>
                    <input className="styleInput" type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }

                <div className="flexEnviar">
                    <button className="btnEnviar" type="submit">Enviar</button>
                </div>
                <hr />

            </form>
            {
                orderId && (
                    <div>
                        <p className="styleOrden">¡Compra finalizada! Gracias por elegirnos. Tu número de orden es {orderId}</p>
                        <hr />
                        <Link className="linkVolver" to="/">
                            <div className="flexBtnVolver">
                                <button className="btnVolverAComprar"> Volver a Comprar </button>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout