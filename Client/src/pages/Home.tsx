
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

const normalizarPrecio = (precio: string | number): number => {
  if (typeof precio === "number") return precio;
  const limpio = precio.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", ".");
  const valor = parseFloat(limpio);
  return isNaN(valor) ? 0 : valor;
};

const formatoCLP = (valor: number): string =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(valor);

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
        <h1 className="title mb-4 text-center fw-bold text-dark display-5">🥩 Carnes Premium</h1>

        <div className="filters d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
          <select className="form-select form-select-sm w-auto shadow-sm">
            <option>Ordenar por: Características</option>
          </select>
          <span className="text-muted small">{productos.length} productos disponibles</span>
          <select className="form-select form-select-sm w-auto shadow-sm">
            <option>Filtrar</option>
          </select>
        </div>

        <div className="row">
          {productos.map((p) => {
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
                        <div className="text-danger fw-semibold small">{p.precio} c/u</div>
                        <div className="text-success fw-bold">{formatoCLP(precioTotal)} total</div>
                      </div>
                    </div>

                    <button
                      className={`btn btn-sm ${usuarioAutenticado ? "btn-primary" : "btn-outline-secondary"} w-100`}
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