
import React from "react";
import "../styles/Home.css";

interface Producto {
  id: number;
  nombre: string;
  peso: string;
  corte: string;
  precio: string;
  imagen: string;
  almacen: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Huachalomo",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$10.995",
    imagen: "src/assets/huachalomo .png",
    almacen: "ALMACÉN",
  },
  {
    id: 2,
    nombre: "Lomo Vetado",
    peso: "500 grs.",
    corte: "Corte Criollo",
    precio: "$12.995",
    imagen: "src/assets/Lomo-Vetado.png",
    almacen: "ALMACÉN",
  },
  {
    id: 3,
    nombre: "Lomo Liso",
    peso: "1.4 kg",
    corte: "Corte Criollo",
    precio: "$15.786",
    imagen: "src/assets/Lomo-liso.png",
    almacen: "ALMACÉN",
  },
  {
    id: 4,
    nombre: "Posta Rosada",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$11.995",
    imagen: "src/assets/Posta-Rosada.png",
    almacen: "ALMACÉN",
  },
  {
    id: 5,
    nombre: "Sobre Costilla",
    peso: "500 grs.",
    corte: "Corte Criollo",
    precio: "$12.995",
    imagen: "src/assets/Sobre-Costilla.png",
    almacen: "ALMACÉN",
  },
  {
    id: 6,
    nombre: "Tapapecho",
    peso: "1.7 kg",
    corte: "Corte Criollo",
    precio: "$18.786",
    imagen: "src/assets/Tapapecho.png",
    almacen: "ALMACÉN",
  },
];

const Home: React.FC = () => {
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
                    <p className="card-text text-muted mb-1">{p.peso} · {p.corte}</p>
                    <span className="badge bg-secondary mb-2">{p.almacen}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <strong className="text-danger fs-5">{p.precio}</strong>
                    <button className="btn btn-sm btn-outline-primary">Agregar</button>
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





















































