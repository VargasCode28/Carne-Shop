import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export interface Producto {
  id: string;
  nombre: string;
  peso: string;
  corte: string;
  precio: string;
  imagen: string;
  almacen: string;
  cantidad: number;
}

interface CarritoContextType {
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
  quitarDelCarrito: (id: string) => void;
  limpiarCarrito: () => void;
  usuarioAutenticado: boolean;
}

export const CarritoContext = createContext<CarritoContextType>({
  carrito: [],
  agregarAlCarrito: () => {},
  quitarDelCarrito: () => {},
  limpiarCarrito: () => {},
  usuarioAutenticado: false,
});

export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState<boolean>(false);
  const [guardarActivo, setGuardarActivo] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("🔐 Usuario detectado:", user?.email || "No autenticado");

      if (user) {
        setUsuarioAutenticado(true);
        const ref = doc(db, "carritos", user.uid);
        try {
          const snap = await getDoc(ref);
          if (snap.exists()) {
            const data = snap.data();
            console.log("📦 Carrito cargado desde Firestore:", data);
            if (Array.isArray(data.productos)) {
              setCarrito(data.productos as Producto[]);
            }
          } else {
            console.log("📭 No hay carrito guardado para este usuario.");
          }
        } catch (error) {
          console.error("❌ Error al cargar carrito:", error);
        }
      } else {
        setUsuarioAutenticado(false);
        setCarrito([]);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const guardarEnFirestore = async () => {
      const user = auth.currentUser;
      if (user && usuarioAutenticado && guardarActivo) {
        const ref = doc(db, "carritos", user.uid);
        const productosSerializados = carrito.map((p) => ({
          id: p.id,
          nombre: p.nombre,
          peso: p.peso,
          corte: p.corte,
          precio: p.precio,
          imagen: p.imagen,
          almacen: p.almacen,
          cantidad: p.cantidad,
        }));
        try {
          await setDoc(ref, { productos: productosSerializados });
          console.log("✅ Carrito guardado en Firestore:", productosSerializados);
        } catch (error) {
          console.error("❌ Error al guardar carrito:", error);
        }
      }
    };
    guardarEnFirestore();
  }, [carrito, usuarioAutenticado, guardarActivo]);

  const agregarAlCarrito = (producto: Producto) => {
    if (!usuarioAutenticado) {
      console.warn("⚠️ Usuario no autenticado. No se puede agregar al carrito.");
      return;
    }

    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      const actualizado = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + producto.cantidad } : p
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const quitarDelCarrito = (id: string) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  const limpiarCarrito = () => {
    setGuardarActivo(false);
    setCarrito([]);
    setTimeout(() => setGuardarActivo(true), 1000); // reactiva guardado
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        limpiarCarrito,
        usuarioAutenticado,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};