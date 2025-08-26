import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link, Navigate } from "react-router-dom";

import {signInWithPopup} from "firebase/auth";
import {googleProvider } from "../firebase/firebase";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);


      const waitForAuth = () =>
        new Promise<void>((resolve) => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              unsubscribe();
              resolve();
            }
          });
        });

      await waitForAuth();
      navigate("/");
    } catch (error: any) {
      alert("Credenciales inválidas");
    }
  };
  

const handleGoogleLogin = async () => {
  try{
    await signInWithPopup(auth, googleProvider);
    navigate("");
  } catch (error: any) {
    alert("Error al iniciar sesion con Google");
    console.error(error);
  }
};

  return (
    <div className="login-page container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4 text-center fw-bold">Iniciar sesión</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button type="submit" className="btn btn-danger w-100">
                Iniciar sesión
              </button>
              <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-100 mt-3">
                Iniciar sesion con Google
              </button>
            </form>
            <div className="text-center mt-3">
              <span>¿No tienes cuenta? </span>
              <Link to="/register" className="text-danger fw-semibold text-decoration-none">
                Regístrate aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


