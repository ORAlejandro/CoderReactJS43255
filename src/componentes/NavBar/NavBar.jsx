import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav className='flexNavBar'>
                <div className='flexDivBar'>
                    <h1 className='wePlay'>wePlay</h1>
                    <div>
                        <ul>
                            <li>Teclados</li>
                            <li>Mouse</li>
                            <li>Auriculares</li>
                            <li>Monitores</li>
                            <li>Gabinetes</li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar