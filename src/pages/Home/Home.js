import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Clients from './Partials/Clients/Clients';
import ContactUs from './Partials/ContactUs/ContactUs';
import Hero from './Partials/Hero/Hero';
import WorksList from './Partials/WorksList/WorksList';

import ReactLoading from 'react-loading';

import { getHomeListRequest } from '../../ducks/home/actions';
import { getHomeErrors, getHomeLoading } from '../../ducks/home/selectors';
import { StyledLoadingHomePage } from './style';

const Home = ({ loading, errors, getHomeList }) => {
  useEffect(() => {
    getHomeList();
  }, [getHomeList]);

  if (loading)
    return (
      <StyledLoadingHomePage>
        <ReactLoading type="bars" color="var(--background-main)" />
      </StyledLoadingHomePage>
    );

  if (errors) return <div>Something bad happened</div>;

  return (
    <>
      <Hero />
      <WorksList />
      <Clients />
      <ContactUs />
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
