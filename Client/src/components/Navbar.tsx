import { Link } from "react-router-dom";



const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">Carnes Premium</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/carrito">Carrito</Link></li>

            </ul>

        </div>
    </nav>
);

export default Navbar;