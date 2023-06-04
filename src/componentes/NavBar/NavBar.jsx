import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header className='container-lg'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid flexNavBar">
                    <h1>wePlay</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                Teclados
                            </li>
                            <li className="nav-item">
                                Mouse
                            </li>
                            <li className="nav-item">
                                Auriculares
                            </li>
                            <li className="nav-item">
                                Soporte
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar