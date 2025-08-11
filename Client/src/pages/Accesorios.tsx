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
  cantidad?: number;
}

const accesorios: Producto[] = [
  {
    id: "a1",
    nombre: "Delantar Parrilla",
    peso: "N/A",
    corte: "Utensilio",
    precio: "$6.990",
    imagen: "src/assets/delantar .png",
    almacen: "ACCESORIOS",
  },
  {
    id: "a2",
    nombre: "Cepillo para Parrilla",
    peso: "N/A",
    corte: "Limpieza",
    precio: "$4.990",
    imagen: "src/assets/Tenedores.png",
    almacen: "ACCESORIOS",
  },
  {
    id: "a3",
    nombre: "Parrilla de Acero Inoxidable",
    peso: "N/A",
    corte: "Indumentaria",
    precio: "$14.990",
    imagen: "src/assets/parrilla.png",
    almacen: "ACCESORIOS",
  },
  
];

const Accesorios: React.FC = () => {
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
        <h1 className="title mb-4 text-center fw-bold text-dark">🛠️ Accesorios para Parrilla</h1>

        <div className="filters d-flex justify-content-between align-items-center mb-4">
          <select className="form-select w-auto">
            <option>Ordenar por: Categoría</option>
          </select>
          <span className="text-muted">{accesorios.length} accesorios</span>
          <select className="form-select w-auto">
            <option>Filtrar</option>
          </select>
        </div>

        <div className="row">
          {accesorios.map((p) => (
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
                        Debe Iniciar Sesión
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

export default Accesorios;