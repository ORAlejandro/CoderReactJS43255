import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='flexItem'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p> ${precio} </p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item