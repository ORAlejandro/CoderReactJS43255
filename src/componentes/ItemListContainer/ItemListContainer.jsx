import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asyncmock"
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
  }, [])
  
  return (
    <div>
        <h2 className="tituloProductos">PRODUCTOS WEPLAY</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer