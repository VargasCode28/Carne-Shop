import React, {useEffect, useContext, useState } from "react";
import "../styles/Home.css";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate, useOutletContext } from "react-router-dom";
import {auth} from "../firebase/firebase";


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
    imagen: "src/assets/Huachalomo.jpg",
    almacen: "ALMACÉN",
  },
  {
    id: "2",
    nombre: "Lomo Vetado",
    peso: "500 grs.",
    corte: "Corte Criollo",
     precio: "$12.995",
    imagen: "src/assets/lomo_vetado.jpg",
    almacen: "ALMACÉN",
  },
  {
    id: "3",
    nombre: "Lomo Liso",
    peso: "1.4 kg",
    corte: "Corte Criollo",
    precio: "$15.786",
    imagen: "src/assets/lomito.jpg",
    almacen: "ALMACÉN",
  },
  {
    id: "4",
    nombre: "Posta Rosada",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$11.995",
    imagen: "src/assets/posta_rosada.jpg",
    almacen: "ALMACÉN",
  },
  {
    id: "5",
    nombre: "Sobre Costilla",
    peso: "500 grs.",
    corte: "Corte Criollo",
    precio: "$12.995",
    imagen: "src/assets/sobre_costilla.jpg",
    almacen: "ALMACÉN",
  },
  {
    id: "6",
    nombre: "Tapapecho",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$18.786",
    imagen: "src/assets/tapapecho.jpg",
    almacen: "ALMACÉN",
  },
];

const normalizarPrecio = (precio: string | number): number => {
  if (typeof precio === "number") return precio;
  const limpio = precio.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", ".");
  const valor = parseFloat(limpio);
  return isNaN(valor) ? 0 : valor;
};

const formatoCLP = (valor: number): string =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(valor);


type OutletContextType = {
  busqueda: string;
  setBusqueda: React.Dispatch<React.SetStateAction<string>>;
};

const Home: React.FC = () => {
  const { agregarAlCarrito, usuarioAutenticado } = useContext(CarritoContext);
  const navigate = useNavigate();
  const [cantidades, setCantidades] = useState<Record<string, number>>({});
  const outletContext = useOutletContext<OutletContextType | undefined>();
  const busqueda = outletContext?.busqueda || "";

  


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

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes((busqueda || "").toLowerCase())
  );

   return (
   


<section className="hero py-5 bg-light">
  <div className="container">
  
  
    <div className="bg-gradient-red text-white py-4 px-3 rounded-4 shadow text-center mb-5">
      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
     
        <h1 className="display-5 fw-bold m-0">Carnes Premium</h1>
      </div>
      <p className="fs-5 mt-3 mb-0">Del campo a tu mesa · Calidad garantizada.</p>
      <hr className="w-25 mx-auto border-light border-2 rounded-pill mt-3" />
    </div>

        <div className="filters d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
          <select className="form-select form-select-sm w-auto shadow-sm">
            <option>Ordenar por: Características</option>
          </select>
          <span className="text-muted small">{productosFiltrados.length} productos disponibles</span>
          <select className="form-select form-select-sm w-auto shadow-sm">
            <option>Filtrar</option>
          </select>
        </div>

        <div className="row">
          {productosFiltrados.map((p) => {
            const cantidad = cantidades[p.id] || 1;
            const precioUnitario = normalizarPrecio(p.precio);
            const precioTotal = precioUnitario * cantidad;

            return (
              <div key={p.id} className="col-md-4 mb-4">
                <div className="card producto-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="producto-img-wrapper bg-light text-center p-3">
                    <img src={p.imagen} alt={p.nombre} className="img-fluid producto-img rounded-3" />
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-bold text-dark mb-1">{p.nombre}</h5>
                      <p className="card-text text-muted small mb-1">{p.peso} · {p.corte}</p>
                      <span className="badge bg-gradient bg-secondary mb-2">{p.almacen}</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="input-group input-group-sm w-50">
                        <button className="btn btn-outline-secondary" onClick={() => handleCantidad(p.id, -1)}>–</button>
                        <span className="input-group-text fw-bold">{cantidad}</span>
                        <button className="btn btn-outline-secondary" onClick={() => handleCantidad(p.id, 1)}>+</button>
                      </div>
                      <div className="text-end">
                         <div className="text-success fw-bold">{formatoCLP(precioTotal)} total</div> 
                      </div>
                    </div>

                    <button
                      className={`btn btn-sm ${usuarioAutenticado ? "btn-dark" : "btn-outline-secondary"} w-100`}
                      onClick={() => usuarioAutenticado ? handleAgregar(p) : navigate("/")}
                    >
                      {usuarioAutenticado ? "Agregar al carrito" : "Debe iniciar sesión"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
 );
};


 



export default Home;





























































































