import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Clients from './Partials/Clients/Clients';
import ContactUs from './Partials/ContactUs/ContactUs';
import Footer from './Partials/Footer/Footer';
import Header from './Partials/Header/Header';
import Hero from './Partials/Hero/Hero';
import Sidebar from './Partials/Sidebar/Sidebar';
import WorksList from './Partials/WorksList/WorksList';

import { getHomeListRequest } from '../../ducks/home/actions';
import { getHomeErrors, getHomeLoading } from '../../ducks/home/selectors';

const Home = ({ loading, errors, getHomeList }) => {
  useEffect(() => {
    getHomeList();
  }, []);

  if (loading) return <div>Loading.......</div>;

  if (errors) return <div>Something bad happened</div>;

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
      <Sidebar />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: getHomeLoading(state),
  errors: getHomeErrors(state),
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => dispatch(getHomeListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
