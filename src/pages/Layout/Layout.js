import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './Partials/Footer/Footer';
import Header from './Partials/Header/Header';
import Sidebar from './Partials/Sidebar/Sidebar';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <Header showMenu={toggleSidebar} toggleSidebar={handleToggleSidebar} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Sidebar show={toggleSidebar} toggleMenu={handleToggleSidebar} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
