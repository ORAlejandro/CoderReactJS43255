import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    const [categoria, setCategoria] = useState("Home");

    useEffect( () => {
        document.title = `wePlay | ${categoria}`
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <header>
            <nav className='flexNavBar'>
                <div className='flexDivBar'>
                    <h1 onClick={ () => handleClick("Home")} className='wePlay'>wePlay</h1>
                    <div>
                        <ul>
                            <li onClick={ () => handleClick("Teclados")}>Teclados</li>
                            <li onClick={ () => handleClick("Mouse")}>Mouse</li>
                            <li onClick={ () => handleClick("Auriculares")}>Auriculares</li>
                            <li onClick={ () => handleClick("Monitores")}>Monitores</li>
                            <li onClick={ () => handleClick("Gabinetes")}>Gabinetes</li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar