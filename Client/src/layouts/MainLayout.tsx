import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

import {useState} from 'react';  

const MainLayout = () => {
  const [busqueda, setBusqueda] = useState(""); 
  return (
  <>
    <Navbar busqueda={busqueda} setBusqueda={setBusqueda} /> 
    <main className="container mt-4">
      <Outlet context={{busqueda, setBusqueda}} />
    </main>
    <Footer />
  </>
  );
};

export default MainLayout;