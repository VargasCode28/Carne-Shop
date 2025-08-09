
// import { useContext } from "react";
// import { CarritoContext } from "../context/CarritoContext";
// import "../styles/Carrito.css";

// const Carrito = () => {
//   const { carrito, quitarDelCarrito, limpiarCarrito } = useContext(CarritoContext);

//   const calcularTotal = () => {
//     return carrito.reduce((acc, p) => {
//       const precioNumerico = parseFloat(p.precio.replace("$", "").replace(".", "").replace(",", "."));
//       return acc + precioNumerico * p.cantidad;
//     }, 0);
//   };

//   const handlePagoSimulado = (metodo: string) => {
//     alert(`Simulando pago con ${metodo}...`);
//     limpiarCarrito(); 
//   };

//   return (
//     <div className="container py-5">
//       <h2 className="mb-4 fw-bold text-center">🛒 Ver Productos</h2>

//       {carrito.length === 0 ? (
//         <div className="text-center text-muted">
//           <p>No hay productos en el carrito.</p>
//           <i className="bi bi-cart-x fs-1"></i>
//         </div>
//       ) : (
//         <div className="row">
//           <div className="col-md-7">
//             <h4 className="fw-semibold mb-3">🧾 Resumen de tu pedido</h4>
//             {carrito.map((p) => (
//               <div key={p.id} className="card mb-3 shadow-sm border-0">
//                 <div className="row g-0 align-items-center">
//                   <div className="col-4">
//                     <img src={p.imagen} alt={p.nombre} className="img-fluid rounded-start" />
//                   </div>
//                   <div className="col-8">
//                     <div className="card-body">
//                       <h5 className="card-title fw-bold">{p.nombre}</h5>
//                       <p className="card-text text-muted mb-1">
//                         {p.peso} · {p.corte} · Cantidad: {p.cantidad}
//                       </p>
//                       <div className="d-flex justify-content-between align-items-center">
//                         <strong className="text-danger">{p.precio}</strong>
//                         <button
//                           className="btn btn-sm btn-outline-danger"
//                           onClick={() => quitarDelCarrito(p.id)}
//                         >
//                           Quitar
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="col-md-5">
//             <div className="card shadow-sm border-0 p-4">
//               <h4 className="fw-bold mb-3">💳 Métodos de pago</h4>

//               <div className="d-flex flex-column gap-3">
//                 <button
//                   className="btn btn-lg btn-outline-primary d-flex justify-content-between align-items-center px-4 py-2"
//                   onClick={() => handlePagoSimulado("PayPal")}
//                 >
//                   <span className="fw-semibold">PayPal</span>
//                   <i className="bi bi-paypal fs-4"></i>
//                 </button>

//                 <button
//                   className="btn btn-lg btn-outline-success d-flex justify-content-between align-items-center px-4 py-2"
//                   onClick={() => handlePagoSimulado("Tarjeta de Crédito")}
//                 >
//                   <span className="fw-semibold">Tarjeta de Crédito</span>
//                   <i className="bi bi-credit-card fs-4"></i>
//                 </button>
//               </div>

//               <hr className="my-4" />

//               <div className="d-flex justify-content-between mb-2">
//                 <span className="text-muted">Subtotal</span>
//                 <span className="fw-semibold">${calcularTotal().toFixed(2)}</span>
//               </div>
//               <div className="d-flex justify-content-between mb-2">
//                 <span className="text-muted">Envío</span>
//                 <span className="fw-semibold">Gratis</span>
//               </div>
//               <div className="d-flex justify-content-between fs-5 fw-bold">
//                 <span>Total</span>
//                 <span className="text-success">${calcularTotal().toFixed(2)}</span>
//               </div>

//               <p className="text-center text-muted mt-3">
//                 * Esta es una simulación de pago para fines de práctica. El carrito se vaciará al confirmar.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carrito;

























































import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { db, auth } from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../styles/Carrito.css";

const Carrito = () => {
  const { carrito, quitarDelCarrito, limpiarCarrito } = useContext(CarritoContext);

  const calcularTotal = () => {
    return carrito.reduce((acc, p) => {
      const precioNumerico = parseFloat(
        p.precio.replace("$", "").replace(".", "").replace(",", ".")
      );
      return acc + precioNumerico * p.cantidad;
    }, 0);
  };

  const handlePagoSimulado = async (metodo: string) => {
    const user = auth.currentUser;
    if (!user) return alert("Debes iniciar sesión para confirmar el pedido.");

    const orden = {
      usuario: user.email,
      metodoPago: metodo,
      productos: carrito.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        cantidad: p.cantidad,
        precio: p.precio,
        peso: p.peso,
        corte: p.corte,
      })),
      total: calcularTotal(),
      fecha: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "ordenes"), orden);
      alert(`Pago simulado con ${metodo}. Orden guardada.`);
      limpiarCarrito();
    } catch (error) {
      console.error("Error al guardar la orden:", error);
      alert("Hubo un problema al guardar la orden.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">🛒 Ver Productos</h2>

      {carrito.length === 0 ? (
        <div className="text-center text-muted">
          <p>No hay productos en el carrito.</p>
          <i className="bi bi-cart-x fs-1"></i>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-7">
            <h4 className="fw-semibold mb-3">🧾 Resumen de tu pedido</h4>
            {carrito.map((p) => (
              <div key={p.id} className="card mb-3 shadow-sm border-0">
                <div className="row g-0 align-items-center">
                  <div className="col-4">
                    <img src={p.imagen} alt={p.nombre} className="img-fluid rounded-start" />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{p.nombre}</h5>
                      <p className="card-text text-muted mb-1">
                        {p.peso} · {p.corte} · Cantidad: {p.cantidad}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-danger">{p.precio}</strong>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => quitarDelCarrito(p.id)}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="fw-bold mb-3">💳 Métodos de pago</h4>

              <div className="d-flex flex-column gap-3">
                <button
                  className="btn btn-lg btn-outline-primary d-flex justify-content-between align-items-center px-4 py-2"
                  onClick={() => handlePagoSimulado("PayPal")}
                >
                  <span className="fw-semibold">PayPal</span>
                  <i className="bi bi-paypal fs-4"></i>
                </button>

                <button
                  className="btn btn-lg btn-outline-success d-flex justify-content-between align-items-center px-4 py-2"
                  onClick={() => handlePagoSimulado("Tarjeta de Crédito")}
                >
                  <span className="fw-semibold">Tarjeta de Crédito</span>
                  <i className="bi bi-credit-card fs-4"></i>
                </button>
              </div>

              <hr className="my-4" />

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-semibold">${calcularTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Envío</span>
                <span className="fw-semibold">Gratis</span>
              </div>
              <div className="d-flex justify-content-between fs-5 fw-bold">
                <span>Total</span>
                <span className="text-success">${calcularTotal().toFixed(2)}</span>
              </div>

              <p className="text-center text-muted mt-3">
                * Esta es una simulación de pago para fines de práctica. El carrito se vaciará al confirmar.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;