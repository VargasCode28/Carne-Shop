// import { useState } from "react";

// interface Props {
//   metodo: string;
//   onConfirmar: (formData: { nombre: string; email: string; tarjeta?: string }) => void;
// }

// const FormularioPago = ({ metodo, onConfirmar }: Props) => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     email: "",
//     tarjeta: "",
//   });

//   const [errores, setErrores] = useState({
//     nombre: "",
//     email: "",
//     tarjeta: "",
//   });

//   const validar = () => {
//     const nuevosErrores = {
//       nombre: formData.nombre ? "" : "Nombre requerido.",
//       email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Email inválido.",
//       tarjeta:
//         metodo === "Tarjeta de Crédito"
//           ? /^\d{16}$/.test(formData.tarjeta.replace(/\s/g, ""))
//             ? ""
//             : "Tarjeta inválida (16 dígitos)."
//           : "",
//     };
//     setErrores(nuevosErrores);
//     return Object.values(nuevosErrores).every((e) => e === "");
//   };

//   const handleSubmit = () => {
//     if (validar()) {
//       onConfirmar(formData);
//     }
//   };

//   return (
//     <form className="mt-4">
//       <h5 className="fw-bold mb-3">Información de pago ({metodo})</h5>

//       <div className="mb-3">
//         <label className="form-label">Nombre completo</label>
//         <input
//           type="text"
//           className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
//           value={formData.nombre}
//           onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
//         />
//         {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Correo electrónico</label>
//         <input
//           type="email"
//           className={`form-control ${errores.email ? "is-invalid" : ""}`}
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         {errores.email && <div className="invalid-feedback">{errores.email}</div>}
//       </div>

//       {metodo === "Tarjeta de Crédito" && (
//         <div className="mb-3">
//           <label className="form-label">Número de tarjeta</label>
//           <input
//             type="text"
//             className={`form-control ${errores.tarjeta ? "is-invalid" : ""}`}
//             value={formData.tarjeta}
//             onChange={(e) => setFormData({ ...formData, tarjeta: e.target.value })}
//             maxLength={16}
//             placeholder="1234567812345678"
//           />
//           {errores.tarjeta && <div className="invalid-feedback">{errores.tarjeta}</div>}
//         </div>
//       )}

//       <button type="button" className="btn btn-success w-100" onClick={handleSubmit}>
//         Confirmar pago simulado
//       </button>
//     </form>
//   );
// };

// export default FormularioPago;











































// import { useState } from "react";

// interface Props {
//   metodo: string;
//   onConfirmar: (formData: { nombre: string; email: string; tarjeta?: string }) => void;
// }

// const FormularioPago = ({ metodo, onConfirmar }: Props) => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     email: "",
//     tarjeta: "",
//   });

//   const [errores, setErrores] = useState({
//     nombre: "",
//     email: "",
//     tarjeta: "",
//   });

//   const [enviando, setEnviando] = useState(false);

//   const validarEmail = (email: string) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const validarTarjeta = (tarjeta: string) =>
//     /^\d{16}$/.test(tarjeta.replace(/\s/g, ""));

//   const validar = () => {
//     const nuevosErrores = {
//       nombre: formData.nombre.trim() ? "" : "Nombre requerido.",
//       email: validarEmail(formData.email) ? "" : "Email inválido.",
//       tarjeta:
//         metodo === "Tarjeta de Crédito"
//           ? validarTarjeta(formData.tarjeta)
//             ? ""
//             : "Tarjeta inválida (16 dígitos)."
//           : "",
//     };
//     setErrores(nuevosErrores);
//     return Object.values(nuevosErrores).every((e) => e === "");
//   };

//   const handleSubmit = () => {
//     if (enviando) return;
//     setEnviando(true);
//     if (validar()) {
//       onConfirmar(formData);
//     }
//     setEnviando(false);
//   };

//   const handleTarjetaChange = (value: string) => {
//     const limpio = value.replace(/\D/g, "").slice(0, 16);
//     const formateado = limpio.replace(/(.{4})/g, "$1 ").trim();
//     setFormData({ ...formData, tarjeta: formateado });
//   };

//   return (
//     <form className="mt-4" noValidate>
//       <h5 className="fw-bold mb-3">Información de pago ({metodo})</h5>

//       <div className="mb-3">
//         <label htmlFor="nombre" className="form-label">Nombre completo</label>
//         <input
//           id="nombre"
//           type="text"
//           className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
//           value={formData.nombre}
//           onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
//           aria-describedby="error-nombre"
//         />
//         {errores.nombre && (
//           <div id="error-nombre" className="invalid-feedback">
//             {errores.nombre}
//           </div>
//         )}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Correo electrónico</label>
//         <input
//           id="email"
//           type="email"
//           className={`form-control ${errores.email ? "is-invalid" : ""}`}
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           aria-describedby="error-email"
//         />
//         {errores.email && (
//           <div id="error-email" className="invalid-feedback">
//             {errores.email}
//           </div>
//         )}
//       </div>

//       {metodo === "Tarjeta de Crédito" && (
//         <div className="mb-3">
//           <label htmlFor="tarjeta" className="form-label">Número de tarjeta</label>
//           <input
//             id="tarjeta"
//             type="text"
//             className={`form-control ${errores.tarjeta ? "is-invalid" : ""}`}
//             value={formData.tarjeta}
//             onChange={(e) => handleTarjetaChange(e.target.value)}
//             placeholder="1234 5678 9012 3456"
//             aria-describedby="error-tarjeta"
//           />
//           {errores.tarjeta && (
//             <div id="error-tarjeta" className="invalid-feedback">
//               {errores.tarjeta}
//             </div>
//           )}
//         </div>
//       )}

//       <button
//         type="button"
//         className="btn btn-success w-100"
//         onClick={handleSubmit}
//         disabled={enviando}
//       >
//         {enviando ? "Procesando..." : "Confirmar pago simulado"}
//       </button>
//     </form>
//   );
// };

// export default FormularioPago;


















































































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

  const [enviando, setEnviando] = useState(false);

  const validarEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validarTarjeta = (tarjeta: string) =>
    /^\d{16}$/.test(tarjeta.replace(/\s/g, ""));

  const validar = () => {
    const nuevosErrores = {
      nombre: formData.nombre.trim() ? "" : "Nombre requerido.",
      email: validarEmail(formData.email) ? "" : "Email inválido.",
      tarjeta:
        metodo === "Tarjeta de Crédito"
          ? validarTarjeta(formData.tarjeta)
            ? ""
            : "Tarjeta inválida (16 dígitos)."
          : "",
    };
    setErrores(nuevosErrores);
    return Object.values(nuevosErrores).every((e) => e === "");
  };

  const handleSubmit = () => {
    if (enviando) return;
    setEnviando(true);
    if (validar()) {
      onConfirmar(formData);
    }
    setEnviando(false);
  };

  const handleTarjetaChange = (value: string) => {
    const limpio = value.replace(/\D/g, "").slice(0, 16);
    const formateado = limpio.replace(/(.{4})/g, "$1 ").trim();
    setFormData({ ...formData, tarjeta: formateado });
  };

  return (
    <form className="card shadow rounded-4 p-4 bg-white" noValidate>
      <h5 className="fw-bold mb-4 text-center">💳 Información de pago ({metodo})</h5>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
            <input
              id="nombre"
              type="text"
              className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            />
          </div>
          {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
            <input
              id="email"
              type="email"
              className={`form-control ${errores.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          {errores.email && <div className="invalid-feedback">{errores.email}</div>}
        </div>
      </div>

      {metodo === "Tarjeta de Crédito" && (
        <div className="mb-3">
          <label htmlFor="tarjeta" className="form-label">Número de tarjeta</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-credit-card-fill"></i></span>
            <input
              id="tarjeta"
              type="text"
              className={`form-control ${errores.tarjeta ? "is-invalid" : ""}`}
              value={formData.tarjeta}
              onChange={(e) => handleTarjetaChange(e.target.value)}
              placeholder="1234 5678 9012 3456"
            />
          </div>
          {errores.tarjeta && <div className="invalid-feedback">{errores.tarjeta}</div>}
        </div>
      )}

      <button
        type="button"
        className="btn btn-success w-100 mt-3"
        onClick={handleSubmit}
        disabled={enviando}
      >
        {enviando ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Procesando...
          </>
        ) : (
          "Confirmar pago simulado"
        )}
      </button>
    </form>
  );
};

export default FormularioPago;