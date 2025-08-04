import React from "react";
import "../styles/Home.css"

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
    nombre: "Lomo liso",
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
    <section className="hero">
      <div className="hero-content container">
        <h1 className="title">Carnes Premium</h1>

        <div className="filters d-flex justify-content-between align-items-center mb-4">
          <select className="form-select w-auto">
            <option>Ordenar por: Características</option>
          </select>
          <span className="text-muted">12 productos</span>
          <select className="form-select w-auto">
            <option>Filtrar</option>
          </select>
        </div>

        <div className="productos-grid row">
          {productos.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="producto-card shadow-sm rounded">
                <img src={p.imagen} alt={p.nombre} className="img-fluid rounded-top" />
                <div className="info p-3">
                  <h2 className="fs-5">{p.nombre}</h2>
                  <p className="mb-1">{p.peso} | {p.corte}</p>
                  <span className="text-secondary small">{p.almacen}</span>
                  <strong className="precio d-block mt-2 text-danger">{p.precio}</strong>
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