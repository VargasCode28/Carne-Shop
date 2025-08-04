import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <Navbar />
    <main className="container mt-4">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;