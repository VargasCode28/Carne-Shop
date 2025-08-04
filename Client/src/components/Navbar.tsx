import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/carnes-premium.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (!confirmLogout) return;

    await signOut(auth);
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Carnes Premium Logo"
            width="65"
            height="65"
            className="navbar-logo d-inline-block align-text-top"
          />
          <span className="fw-bold fs-4"></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {!user ? (
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/login">
                <i className="bi bi-person-circle fs-5"></i>
                <span>Login</span>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="nav-link btn btn-link d-flex align-items-center gap-2 text-danger"
              >
                <i className="bi bi-box-arrow-right fs-5"></i>
                <span>Cerrar sesión</span>
              </button>
            </li>
          )}

          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-2" to="/perfil">
              <i className="bi bi-person-lines-fill fs-5"></i>
              <span>Perfil</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-2" to="/carrito">
              <i className="bi bi-cart-fill fs-5"></i>
              <span>Carrito</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;