import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial)

    const incrementarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }
  return (
    <div className="flexContador">
        <button className="botonDisminuir" onClick={disminuirContador}> - </button>
        <p className="contadorEstilo"> {contador} </p>
        <button className="botonIncrementar" onClick={incrementarContador}> + </button>
    </div>
  )
}

export default ItemCount