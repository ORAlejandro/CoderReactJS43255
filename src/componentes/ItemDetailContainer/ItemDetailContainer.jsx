import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
//import { getUnProducto } from "../../asyncmock"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect( () => {
        const newDoc = doc(db, "inventario", idItem);

        getDoc(newDoc)
          .then(res => {
            const data = res.data()
            const newProduct = {id:res.id, ...data}
            setProducto(newProduct);
          })
          .catch(error => console.log(error))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer

/*

useEffect( () => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error => console.log(error))
    }, [idItem])

*/