import { useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const [categoria, setCategoria] = useState("Home");

    useEffect(() => {
        document.title = `wePlay | ${categoria}`
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <header>
            <nav className='flexNavBar'>
                <div className='flexDivBar'>
                    <Link to={"/"}>
                        <h1 onClick={() => handleClick("Home")} className='wePlay'>wePlay</h1>
                    </Link>
                    <div>
                        <ul>

                            <li onClick={() => handleClick("Teclados")}>
                                <NavLink to={`/categoria/teclado`}>Teclados</NavLink>
                            </li>

                            <li onClick={() => handleClick("Mouse")}>
                                <NavLink to={`/categoria/mouse`}>Mouse</NavLink>
                            </li>
                            <li onClick={() => handleClick("Auriculares")}>
                                <NavLink to={`/categoria/auricular`}>Auriculares</NavLink>
                            </li>

                            <li onClick={() => handleClick("Monitores")}>
                                <NavLink to={`/categoria/monitor`}>Monitores</NavLink>
                            </li>

                            <li onClick={() => handleClick("Gabinetes")}>
                                <NavLink to={`/categoria/gabinete`}>Gabinetes</NavLink>
                            </li>

                        </ul>

                    </div>

                    <CartWidget />

                </div>

            </nav>
        </header>
    )
}

export default NavBar