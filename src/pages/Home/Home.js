import React from 'react';

import './Home.css';
import Clients from './Partials/Clients/Clients';
import ContactUs from './Partials/ContactUs/ContactUs';
import Footer from './Partials/Footer/Footer';
import Header from './Partials/Header/Header';
import Hero from './Partials/Hero/Hero';
import WorksList from './Partials/WorksList/WorksList';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="work"
          url="#"
          image="https://dlmoviez.ir/musicisho?path=src/dept-images/header.jpg"
        />
        <WorksList />
        <Clients />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
