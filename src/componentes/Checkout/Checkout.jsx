import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, clearCart, totalAmount } = useContext(CartContext);
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
            items: cart.map( producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: totalAmount,
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch(error => {
                console.log("Error al generar la orden", error);
                setError("Se produjo un error inesperado al generar la orden");
            })
    }


    return (
        <div>
            <h2>CHECKOUT</h2>
            <form onSubmit={handlerForm}>
                {cart.map(producto => (
                    <div>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $ {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <hr />

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="">Apeliido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="">Confirmación Email</label>
                    <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }

                <button type="submit">Enviar</button>

            </form>
            {
                orderId && (
                    <p>Compra con éxito, tu número de orden es {orderId}</p>
                )
            }
        </div>
    )
}

export default Checkout