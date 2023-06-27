import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='flexItem divItem'>
        <img className='imgItem' src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p className='pItem'> ${precio} </p>
        <Link className='btnVerDetalles' to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item