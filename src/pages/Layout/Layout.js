import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Partials/Footer/Footer';
import Header from './Partials/Header/Header';
import Sidebar from './Partials/Sidebar/Sidebar';

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
    </>
  );
};

export default Layout;
