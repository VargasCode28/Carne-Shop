// import React from "react";
// import "../styles/Home.css";
// import { useContext } from "react";

// interface Producto {
//   id: number;
//   nombre: string;
//   peso: string;
//   corte: string;
//   precio: string;
//   imagen: string;
//   almacen: string;
// }

// const productos: Producto[] = [
//   {
//     id: 1,
//     nombre: "Huachalomo",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$10.995",
//     imagen: "src/assets/huachalomo .png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: 2,
//     nombre: "Lomo Vetado",
//     peso: "500 grs.",
//     corte: "Corte Criollo",
//     precio: "$12.995",
//     imagen: "src/assets/Lomo-Vetado.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: 3,
//     nombre: "Lomo Liso",
//     peso: "1.4 kg",
//     corte: "Corte Criollo",
//     precio: "$15.786",
//     imagen: "src/assets/Lomo-liso.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: 4,
//     nombre: "Posta Rosada",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$11.995",
//     imagen: "src/assets/Posta-Rosada.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: 5,
//     nombre: "Sobre Costilla",
//     peso: "500 grs.",
//     corte: "Corte Criollo",
//     precio: "$12.995",
//     imagen: "src/assets/Sobre-Costilla.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: 6,
//     nombre: "Tapapecho",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$18.786",
//     imagen: "src/assets/Tapapecho.png",
//     almacen: "ALMACÉN",
//   },
// ];

// const Home: React.FC = () => {

//   return (
//     <section className="hero py-5 bg-light">
//       <div className="container">
//         <h1 className="title mb-4 text-center fw-bold text-dark">🥩 Carnes Premium</h1>

//         <div className="filters d-flex justify-content-between align-items-center mb-4">
//           <select className="form-select w-auto">
//             <option>Ordenar por: Características</option>
//           </select>
//           <span className="text-muted">{productos.length} productos</span>
//           <select className="form-select w-auto">
//             <option>Filtrar</option>
//           </select>
//         </div>

//         <div className="row">
//           {productos.map((p) => (
//             <div key={p.id} className="col-md-4 mb-4">
//               <div className="card producto-card h-100 shadow-sm border-0 d-flex flex-column">
//                 <div className="producto-img-wrapper">
//                   <img src={p.imagen} alt={p.nombre} className="img-fluid producto-img" />
//                 </div>
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <div>
//                     <h5 className="card-title fw-semibold text-dark">{p.nombre}</h5>
//                     <p className="card-text text-muted mb-1">{p.peso} · {p.corte}</p>
//                     <span className="badge bg-secondary mb-2">{p.almacen}</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <strong className="text-danger fs-5">{p.precio}</strong>
                    
//                   <button
//                     className="btn btn-sm btn-outline-primary"
//                     onClick={()=> agregarAlCarrito(p)}
//                   >
//                   Agregar
//                     </button>
                   
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;




































































































































































































































// import React, { useContext } from "react";
// import "../styles/Home.css";
// import { CarritoContext } from "../context/CarritoContext";

// interface Producto {
//   id: string;
//   nombre: string;
//   peso: string;
//   corte: string;
//   precio: string;
//   imagen: string;
//   almacen: string;
// }

// const productos: Producto[] = [
//   {
//     id: "1",
//     nombre: "Huachalomo",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$10.995",
//     imagen: "src/assets/huachalomo .png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "2",
//     nombre: "Lomo Vetado",
//     peso: "500 grs.",
//     corte: "Corte Criollo",
//     precio: "$12.995",
//     imagen: "src/assets/Lomo-Vetado.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "3",
//     nombre: "Lomo Liso",
//     peso: "1.4 kg",
//     corte: "Corte Criollo",
//     precio: "$15.786",
//     imagen: "src/assets/Lomo-liso.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "4",
//     nombre: "Posta Rosada",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$11.995",
//     imagen: "src/assets/Posta-Rosada.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "5",
//     nombre: "Sobre Costilla",
//     peso: "500 grs.",
//     corte: "Corte Criollo",
//     precio: "$12.995",
//     imagen: "src/assets/Sobre-Costilla.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "6",
//     nombre: "Tapapecho",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$18.786",
//     imagen: "src/assets/Tapapecho.png",
//     almacen: "ALMACÉN",
//   },
// ];

// const Home: React.FC = () => {
//   const { agregarAlCarrito, usuarioAutenticado } = useContext(CarritoContext);

//   return (
//     <section className="hero py-5 bg-light">
//       <div className="container">
//         <h1 className="title mb-4 text-center fw-bold text-dark">🥩 Carnes Premium</h1>

//         <div className="filters d-flex justify-content-between align-items-center mb-4">
//           <select className="form-select w-auto">
//             <option>Ordenar por: Características</option>
//           </select>
//           <span className="text-muted">{productos.length} productos</span>
//           <select className="form-select w-auto">
//             <option>Filtrar</option>
//           </select>
//         </div>

//         <div className="row">
//           {productos.map((p) => (
//             <div key={p.id} className="col-md-4 mb-4">
//               <div className="card producto-card h-100 shadow-sm border-0 d-flex flex-column">
//                 <div className="producto-img-wrapper">
//                   <img src={p.imagen} alt={p.nombre} className="img-fluid producto-img" />
//                 </div>
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <div>
//                     <h5 className="card-title fw-semibold text-dark">{p.nombre}</h5>
//                     <p className="card-text text-muted mb-1">{p.peso} · {p.corte}</p>
//                     <span className="badge bg-secondary mb-2">{p.almacen}</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <strong className="text-danger fs-5">{p.precio}</strong>
//                     {usuarioAutenticado ? (
//                       <button
//                         className="btn btn-sm btn-outline-primary"
//                         onClick={() => agregarAlCarrito(p)}
//                       >
//                         Agregar
//                       </button>
//                     ) : (
//                       <button className="btn btn-sm btn-outline-secondary" disabled>
//                         Inicia sesión
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;







































































































// import React, { useContext } from "react";
// import "../styles/Home.css";
// import { CarritoContext } from "../context/CarritoContext";
// import { useNavigate } from "react-router-dom";

// interface Producto {
//   id: string;
//   nombre: string;
//   peso: string;
//   corte: string;
//   precio: string;
//   imagen: string;
//   almacen: string;
 
// }

// const productos: Producto[] = [
//   {
//     id: "1",
//     nombre: "Huachalomo",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$10.995",
//     imagen: "src/assets/huachalomo .png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "2",
//     nombre: "Lomo Vetado",
//     peso: "500 grs.",
//     corte: "Corte Criollo",
//     precio: "$12.995",
//     imagen: "src/assets/Lomo-Vetado.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "3",
//     nombre: "Lomo Liso",
//     peso: "1.4 kg",
//     corte: "Corte Criollo",
//     precio: "$15.786",
//     imagen: "src/assets/Lomo-liso.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "4",
//     nombre: "Posta Rosada",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$11.995",
//     imagen: "src/assets/Posta-Rosada.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "5",
//     nombre: "Sobre Costilla",
//     peso: "500 grs.",
//     corte: "Corte Criollo",
//     precio: "$12.995",
//     imagen: "src/assets/Sobre-Costilla.png",
//     almacen: "ALMACÉN",
//   },
//   {
//     id: "6",
//     nombre: "Tapapecho",
//     peso: "1.7 kg",
//     corte: "Corte Criollo",
//     precio: "$18.786",
//     imagen: "src/assets/Tapapecho.png",
//     almacen: "ALMACÉN",
//   },
// ];

// const Home: React.FC = () => {
//   const { agregarAlCarrito, usuarioAutenticado } = useContext(CarritoContext);
//   const navigate = useNavigate();

//   const handleAgregar = (producto: Producto) => {
//     if (!usuarioAutenticado) {
//       alert("Debes iniciar sesión para agregar productos al carrito.");
//       return;
//     }
//     agregarAlCarrito({ ...producto, cantidad: 1 });
//     navigate("/carrito");
//   };

//   return (
//     <section className="hero py-5 bg-light">
//       <div className="container">
//         <h1 className="title mb-4 text-center fw-bold text-dark">🥩 Carnes Premium</h1>

//         <div className="filters d-flex justify-content-between align-items-center mb-4">
//           <select className="form-select w-auto">
//             <option>Ordenar por: Características</option>
//           </select>
//           <span className="text-muted">{productos.length} productos</span>
//           <select className="form-select w-auto">
//             <option>Filtrar</option>
//           </select>
//         </div>

//         <div className="row">
//           {productos.map((p) => (
//             <div key={p.id} className="col-md-4 mb-4">
//               <div className="card producto-card h-100 shadow-sm border-0 d-flex flex-column">
//                 <div className="producto-img-wrapper">
//                   <img src={p.imagen} alt={p.nombre} className="img-fluid producto-img" />
//                 </div>
//                 <div className="card-body d-flex flex-column justify-content-between">
//                   <div>
//                     <h5 className="card-title fw-semibold text-dark">{p.nombre}</h5>
//                     <p className="card-text text-muted mb-1">{p.peso} · {p.corte}</p>
//                     <span className="badge bg-secondary mb-2">{p.almacen}</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <strong className="text-danger fs-5">{p.precio}</strong>
//                     <button
//                       className={`btn btn-sm ${usuarioAutenticado ? "btn-outline-primary" : "btn-outline-secondary"}`}
//                       disabled={!usuarioAutenticado}
//                       onClick={() => handleAgregar(p)}
//                     >
//                       {usuarioAutenticado ? "Agregar" : "Inicia sesión"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;





























































































































































































import React, { useContext, useState } from "react";
import "../styles/Home.css";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

interface Producto {
  id: string;
  nombre: string;
  peso: string;
  corte: string;
  precio: string;
  imagen: string;
  almacen: string;
}

const productos: Producto[] = [
  {
    id: "1",
    nombre: "Huachalomo",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$10.995",
    imagen: "src/assets/huachalomo .png",
    almacen: "ALMACÉN",
  },
  {
    id: "2",
    nombre: "Lomo Vetado",
    peso: "500 grs.",
    corte: "Corte Criollo",
    precio: "$12.995",
    imagen: "src/assets/Lomo-Vetado.png",
    almacen: "ALMACÉN",
  },
  {
    id: "3",
    nombre: "Lomo Liso",
    peso: "1.4 kg",
    corte: "Corte Criollo",
    precio: "$15.786",
    imagen: "src/assets/Lomo-liso.png",
    almacen: "ALMACÉN",
  },
  {
    id: "4",
    nombre: "Posta Rosada",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$11.995",
    imagen: "src/assets/Posta-Rosada.png",
    almacen: "ALMACÉN",
  },
  {
    id: "5",
    nombre: "Sobre Costilla",
    peso: "500 grs.",
    corte: "Corte Criollo",
    precio: "$12.995",
    imagen: "src/assets/Sobre-Costilla.png",
    almacen: "ALMACÉN",
  },
  {
    id: "6",
    nombre: "Tapapecho",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$18.786",
    imagen: "src/assets/Tapapecho.png",
    almacen: "ALMACÉN",
  },
];

const Home: React.FC = () => {
  const { agregarAlCarrito, usuarioAutenticado } = useContext(CarritoContext);
  const navigate = useNavigate();

  const [cantidades, setCantidades] = useState<Record<string, number>>({});

  const handleCantidad = (id: string, delta: number) => {
    setCantidades((prev) => {
      const nuevaCantidad = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: nuevaCantidad };
    });
  };

  const handleAgregar = (producto: Producto) => {
    const cantidad = cantidades[producto.id] || 1;
    if (!usuarioAutenticado) {
      alert("Debes iniciar sesión para agregar productos al carrito.");
      return;
    }
    agregarAlCarrito({ ...producto, cantidad });
    navigate("/carrito");
  };

  return (
    <section className="hero py-5 bg-light">
      <div className="container">
        <h1 className="title mb-4 text-center fw-bold text-dark">🥩 Carnes Premium</h1>

        <div className="filters d-flex justify-content-between align-items-center mb-4">
          <select className="form-select w-auto">
            <option>Ordenar por: Características</option>
          </select>
          <span className="text-muted">{productos.length} productos</span>
          <select className="form-select w-auto">
            <option>Filtrar</option>
          </select>
        </div>

        <div className="row">
          {productos.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="card producto-card h-100 shadow-sm border-0 d-flex flex-column">
                <div className="producto-img-wrapper">
                  <img src={p.imagen} alt={p.nombre} className="img-fluid producto-img" />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-semibold text-dark">{p.nombre}</h5>
                    <p className="card-text text-muted mb-1">
                      {p.peso} · {p.corte}
                    </p>
                    <span className="badge bg-secondary mb-2">{p.almacen}</span>
                  </div>

                  {/* 🔢 Selector visual de cantidad */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleCantidad(p.id, -1)}
                    >
                      –
                    </button>
                    <span className="fw-bold">{cantidades[p.id] || 1}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleCantidad(p.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="text-danger fs-5">{p.precio}</strong>
                    {usuarioAutenticado ? (
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleAgregar(p)}
                      >
                        Agregar
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => navigate("/")}
                      >
                        Debe Iniciar Sesion
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;





























