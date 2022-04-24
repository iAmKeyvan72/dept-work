import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ClientLogo from '../../../../components/ClientLogo/ClientLogo';
import {
  StyledClientSectionDescription,
  StyledClientsSection,
  StyledClientsSlider,
} from './style';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Container from '../../../../components/Container/Container';
import { connect } from 'react-redux';
import { getClients } from '../../../../ducks/home/selectors';

const Clients = ({ clients }) => {
  const sliderSettings = {
    infinite: true,
    centerPadding: '20px',
    rows: 4,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 3,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <StyledClientsSection>
      <Container>
        <SectionTitle title="Clients" />
        <StyledClientSectionDescription>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </StyledClientSectionDescription>

        <StyledClientsSlider {...sliderSettings}>
          {clients.map((client, i) => (
            <ClientLogo key={i} {...client} />
          ))}
        </StyledClientsSlider>
      </Container>
    </StyledClientsSection>
  );
};

const mapStateToProps = (state) => ({
  clients: getClients(state),
});

export default connect(mapStateToProps)(Clients);
