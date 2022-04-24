import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Partials/Footer/Footer';
import Header from '../Home/Partials/Header/Header';
import Sidebar from '../Home/Partials/Sidebar/Sidebar';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <Sidebar />
  </>
);

export default Layout;
