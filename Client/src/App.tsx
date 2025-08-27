import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Carrito from './pages/Carrito';
import Historial from './pages/Historial';



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
         <Route path='' element={<Home />} /> 
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} /> 
         <Route path="/carrito" element={<Carrito/>} />
         <Route path ="/historial" element={<Historial/>} />
         
      </Route>
    </Routes>
  );
}

export default App;