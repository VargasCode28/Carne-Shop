import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer text-light mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
       
          <div className="col-md-4">
            <h4 className="fw-bold text-uppercase mb-3">Carnes Premium</h4>
            <p className="text-white small">
              Cortes criollos de alta calidad. Frescura, sabor y tradición en cada entrega.
            </p>
          </div>

     
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Inicio</a></li>
              <li><a href="#" className="footer-link">Catálogo</a></li>
              <li><a href="#" className="footer-link">Mi cuenta</a></li>
              <li><a href="#" className="footer-link">Términos y condiciones</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3">Contáctanos</h5>
            <ul className="list-unstyled text-white small">
              <li>📍 Arica, Chile</li>
              <li>📞 +56 9 9999 9999</li>
              <li>✉️ contacto@carnespremium.cl</li>
            </ul>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <hr className="mt-4 border-white" />
        <div className="text-center small text-white ">
          &copy; {new Date().getFullYear()} Carnes Premium. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;