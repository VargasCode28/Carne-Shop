import { useState } from "react";

interface Props {
  metodo: string;
  onConfirmar: (formData: { nombre: string; email: string; tarjeta?: string }) => void;
}

const FormularioPago = ({ metodo, onConfirmar }: Props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tarjeta: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    tarjeta: "",
  });

  const validar = () => {
    const nuevosErrores = {
      nombre: formData.nombre ? "" : "Nombre requerido.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Email inválido.",
      tarjeta:
        metodo === "Tarjeta de Crédito"
          ? /^\d{16}$/.test(formData.tarjeta.replace(/\s/g, ""))
            ? ""
            : "Tarjeta inválida (16 dígitos)."
          : "",
    };
    setErrores(nuevosErrores);
    return Object.values(nuevosErrores).every((e) => e === "");
  };

  const handleSubmit = () => {
    if (validar()) {
      onConfirmar(formData);
    }
  };

  return (
    <form className="mt-4">
      <h5 className="fw-bold mb-3">Información de pago ({metodo})</h5>

      <div className="mb-3">
        <label className="form-label">Nombre completo</label>
        <input
          type="text"
          className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          className={`form-control ${errores.email ? "is-invalid" : ""}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
      </div>

      {metodo === "Tarjeta de Crédito" && (
        <div className="mb-3">
          <label className="form-label">Número de tarjeta</label>
          <input
            type="text"
            className={`form-control ${errores.tarjeta ? "is-invalid" : ""}`}
            value={formData.tarjeta}
            onChange={(e) => setFormData({ ...formData, tarjeta: e.target.value })}
            maxLength={16}
            placeholder="1234567812345678"
          />
          {errores.tarjeta && <div className="invalid-feedback">{errores.tarjeta}</div>}
        </div>
      )}

      <button type="button" className="btn btn-success w-100" onClick={handleSubmit}>
        Confirmar pago simulado
      </button>
    </form>
  );
};

export default FormularioPago;