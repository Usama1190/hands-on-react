import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
