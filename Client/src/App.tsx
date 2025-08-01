import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home';
// import Productos from './pages/Productos';
// import Carrito from './pages/Carrito';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="carrito" element={<Carrito />} /> */}
      </Route>
    </Routes>
  );
}

export default App;