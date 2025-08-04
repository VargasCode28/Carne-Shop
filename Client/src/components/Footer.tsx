import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer text-light mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Marca */}
          <div className="col-md-4">
            <h5 className="fw-bold">Carnes Premium</h5>
            <p className="small text-muted">
              Selección de cortes criollos de alta calidad. Frescura, sabor y tradición en cada entrega.
            </p>
          </div>

          {/* Enlaces */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Enlaces útiles</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Inicio</a></li>
              <li><a href="#" className="footer-link">Catálogo</a></li>
              <li><a href="#" className="footer-link">Mi cuenta</a></li>
              <li><a href="#" className="footer-link">Términos y condiciones</a></li>
            </ul>
          </div>

          {/* Contacto y redes */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Contáctanos</h6>
            <p className="small mb-1">📍 Arica, Chile</p>
            <p className="small mb-1">📞 +56 9 1234 5678</p>
            <p className="small mb-3">✉️ contacto@carnespremium.cl</p>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <hr className="mt-4" />
        <div className="text-center small text-muted">
          &copy; {new Date().getFullYear()} Carnes Premium. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;