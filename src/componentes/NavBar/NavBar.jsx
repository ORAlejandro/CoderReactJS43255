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
                            <NavLink to={"/teclados"}>
                                <li onClick={() => handleClick("Teclados")}>Teclados</li>
                            </NavLink>

                            <NavLink to={"/mouse"}>
                                <li onClick={() => handleClick("Mouse")}>Mouse</li>
                            </NavLink>

                            <NavLink to={"/auriculares"}>
                                <li onClick={() => handleClick("Auriculares")}>Auriculares</li>
                            </NavLink>

                            <NavLink to={"/monitores"}>
                                <li onClick={() => handleClick("Monitores")}>Monitores</li>
                            </NavLink>

                            <NavLink to={"/gabinetes"}>
                                <li onClick={() => handleClick("Gabinetes")}>Gabinetes</li>
                            </NavLink>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar