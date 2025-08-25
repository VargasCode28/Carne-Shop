
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebase";
import { collection, query, where, getDocs, writeBatch } from "firebase/firestore";

const Historial = () => {
  const [ordenes, setOrdenes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrdenes = async () => {
      const user = auth.currentUser;
      if (!user) {
        setOrdenes([]);
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, "ordenes"), where("usuario", "==", user.email));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrdenes(data);
      } catch (error) {
        console.error("Error al obtener órdenes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdenes();
  }, []);

  const handleLimpiarHistorial = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      setLoading(true);
      const q = query(collection(db, "ordenes"), where("usuario", "==", user.email));
      const snapshot = await getDocs(q);

      const batch = writeBatch(db);
      snapshot.docs.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();

      setOrdenes([]);
    } catch (error) {
      console.error("Error al limpiar historial:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">📦 Historial de Compras</h2>

      {loading ? (
        <p className="text-center text-muted">Cargando órdenes...</p>
      ) : ordenes.length === 0 ? (
        <p className="text-center text-muted">No tienes órdenes registradas.</p>
      ) : (
        <>
          <div className="text-center mb-4">
            <button
              className="btn btn-outline-danger"
              onClick={handleLimpiarHistorial}
              disabled={loading}
            >
              🧹 Limpiar historial
            </button>
          </div>

          {ordenes.map((orden) => (
            <div key={orden.id} className="card mb-3 shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold">Orden #{orden.id}</h5>
                <p className="mb-1">Método: {orden.metodoPago}</p>
                <p className="mb-1">Total: ${orden.total.toFixed(2)}</p>
                <p className="mb-1">Fecha: {orden.fecha.toDate().toLocaleString()}</p>
                <ul className="mt-2">
                  {orden.productos.map((p: any, i: number) => (
                    <li key={i}>
                      {p.nombre} · {p.corte} · {p.peso} · Cantidad: {p.cantidad}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Historial;


