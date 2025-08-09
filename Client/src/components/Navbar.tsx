
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { auth } from "../firebase/firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import logo from "../assets/carnes-premium.png";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [user, setUser] = useState<any>(null);
//   const [busqueda, setBusqueda] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
//     if (!confirmLogout) return;

//     await signOut(auth);
//     setUser(null);
//     navigate("/login");
//   };

//   const handleBuscar = () => {
//     if (busqueda.trim() === "") return;
//     console.log("Buscando:", busqueda);
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2 shadow-sm ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
//           <img
//             src={logo}
//             alt="Carnes Premium Logo"
//             className={`navbar-logo ${scrolled ? "logo-small" : "logo-large"}`}
//           />
//           <span className="fw-bold fs-4">Carnes Premium</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
            
//             <li className="nav-item d-flex align-items-center">
//               <div className="input-group input-group-sm">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Buscar..."
//                   value={busqueda}
//                   onChange={(e) => setBusqueda(e.target.value)}
//                 />
//                 <button className="btn btn-outline-secondary" onClick={handleBuscar}>
//                   <i className="bi bi-search"></i>
//                 </button>
//               </div>
//             </li>

//             {!user ? (
//               <li className="nav-item">
//                 <Link className="nav-link d-flex align-items-center gap-2" to="/login">
//                   <i className="bi bi-person-circle fs-5"></i>
//                   <span>Login</span>
//                 </Link>
//               </li>
//             ) : (
//               <li className="nav-item">
//                 <button
//                   onClick={handleLogout}
//                   className="nav-link btn btn-link d-flex align-items-center gap-2 text-danger"
//                 >
//                   <i className="bi bi-box-arrow-right fs-5"></i>
//                   <span>Cerrar sesión</span>
//                 </button>
//               </li>
//             )}

//             <li className="nav-item">
//               <Link className="nav-link d-flex align-items-center gap-2" to="/perfil">
//                 <i className="bi bi-person-lines-fill fs-5"></i>
//                 <span>Perfil</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link d-flex align-items-center gap-2" to="/accesorios">
//                 <i className="bi bi-bag fs-5"></i>
//                 <span>Accesorios</span>
//               </Link>
//             </li>

            
//             <li className="nav-item">
//               <Link className="nav-link d-flex align-items-center gap-2" to="/Carrito">
//                 <i className="bi bi-cart-fill fs-5"></i>
//                 <span>Carrito</span>
//               </Link>
//            </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };



// export default Navbar;



































































































































































































// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { auth } from "../firebase/firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import logo from "../assets/carnes-premium.png";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const [user, setUser] = useState<any>(null);
//   const [busqueda, setBusqueda] = useState("");
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
//     if (!confirmLogout) return;

//     await signOut(auth);
//     setUser(null);
//     navigate("/login");
//   };

//   const handleBuscar = () => {
//     if (busqueda.trim() === "") return;
//     console.log("Buscando:", busqueda);
//   };

//   const getNombreUsuario = (email: string) => {
//     return email.split("@")[0];
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2 shadow-sm ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
//           <img
//             src={logo}
//             alt="Carnes Premium Logo"
//             className={`navbar-logo ${scrolled ? "logo-small" : "logo-large"}`}
//           />
//           <span className="fw-bold fs-4">Carnes Premium</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">

//             <li className="nav-item d-flex align-items-center">
//               <div className="input-group input-group-sm">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Buscar..."
//                   value={busqueda}
//                   onChange={(e) => setBusqueda(e.target.value)}
//                 />
//                 <button className="btn btn-outline-secondary" onClick={handleBuscar}>
//                   <i className="bi bi-search"></i>
//                 </button>
//               </div>
//             </li>

//             {user ? (
//               <>
//                 <li className="nav-item d-flex align-items-center text-success fw-semibold">
//                   <i className="bi bi-person-check fs-5 me-1"></i>
//                   <span>{getNombreUsuario(user.email)}</span>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     onClick={handleLogout}
//                     className="nav-link btn btn-link d-flex align-items-center gap-2 text-danger"
//                   >
//                     <i className="bi bi-box-arrow-right fs-5"></i>
//                     <span>Cerrar sesión</span>
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li className="nav-item">
//                 <Link className="nav-link d-flex align-items-center gap-2" to="/login">
//                   <i className="bi bi-person-circle fs-5"></i>
//                   <span>Login</span>
//                 </Link>
//               </li>
//             )}

     

//             <li className="nav-item">
//               <Link className="nav-link d-flex align-items-center gap-2" to="/accesorios">
//                 <i className="bi bi-bag fs-5"></i>
//                 <span>Accesorios</span>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link d-flex align-items-center gap-2" to="/Carrito">
//                 <i className="bi bi-cart-fill fs-5"></i>
//                 <span>Carrito</span>
//               </Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





























































































import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/carnes-premium.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [busqueda, setBusqueda] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (!confirmLogout) return;

    await signOut(auth);
    setUser(null);
    navigate("/login");
  };

  const handleBuscar = () => {
    if (busqueda.trim() === "") return;
    console.log("Buscando:", busqueda);
  };

  const getNombreUsuario = (email: string) => email.split("@")[0];
  const getAvatar = () =>
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${getNombreUsuario(user.email)}&background=random`;

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2 shadow-sm ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Carnes Premium Logo"
            className={`navbar-logo ${scrolled ? "logo-small" : "logo-large"}`}
          />
          <span className="fw-bold fs-4">Carnes Premium</span>
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

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">

            <li className="nav-item d-flex align-items-center">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <button className="btn btn-outline-secondary" onClick={handleBuscar}>
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </li>

            {user ? (
              <>
                <li className="nav-item d-flex align-items-center gap-2">
                  <img
                    src={getAvatar()}
                    alt="Avatar"
                    className="rounded-circle"
                    style={{ width: "32px", height: "32px", objectFit: "cover" }}
                  />
                  <span className="fw-semibold text-success">{getNombreUsuario(user.email)}</span>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link btn btn-link d-flex align-items-center gap-2 text-danger"
                  >
                    <i className="bi bi-box-arrow-right fs-5"></i>
                    <span>Cerrar sesión</span>
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/login">
                  <i className="bi bi-person-circle fs-5"></i>
                  <span>Login</span>
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/accesorios">
                <i className="bi bi-bag fs-5"></i>
                <span>Accesorios</span>
              </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-2" to="/historial">
            <i className="bi bi-clock-history fs-5"></i>
            <span>Historial</span>
            </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/Carrito">
                <i className="bi bi-cart-fill fs-5"></i>
                <span>Carrito</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;