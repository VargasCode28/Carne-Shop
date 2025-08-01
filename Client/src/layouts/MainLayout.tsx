import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <Navbar />
    <main className="container mt-4">
      <Outlet />
    </main>
  </>
);

export default MainLayout;