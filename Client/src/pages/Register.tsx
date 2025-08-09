// import React, { useState } from "react";
// import { auth } from "../firebase/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";


// const Register: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (pass !== confirm) return alert("Las contraseñas no coinciden");

//     try {
//       await createUserWithEmailAndPassword(auth, email, pass);
//       navigate("/login");
//     } catch (error: any) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-page container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">
//           <div className="card shadow-sm p-4">
//             <h2 className="mb-4 text-center fw-bold">Crear cuenta</h2>
//             <form onSubmit={handleRegister}>
//               <input type="email" className="form-control mb-3" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
//               <input type="password" className="form-control mb-3" placeholder="Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} />
//               <input type="password" className="form-control mb-3" placeholder="Confirmar contraseña" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
//               <button type="submit" className="btn btn-danger w-100">Registrarse</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;













































import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pass !== confirm) return alert("Las contraseñas no coinciden");

    try {
      await createUserWithEmailAndPassword(auth, email, pass);

      // 🔄 Recargar datos del usuario para que el Navbar lo detecte
      await auth.currentUser?.reload();

      // ✅ Redirigir al home para que el Navbar se actualice
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="login-page container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4 text-center fw-bold">Crear cuenta</h2>
            <form onSubmit={handleRegister}>
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
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Confirmar contraseña"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button type="submit" className="btn btn-danger w-100">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;