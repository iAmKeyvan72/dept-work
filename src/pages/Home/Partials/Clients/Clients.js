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
import strings from '../../../../constants/strings';

const Clients = ({ clients }) => {
  const sliderSettings = {
    infinite: true,
    centerPadding: '20px',
    rows: 4,
    lazyLoad: true,
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
        <SectionTitle title={strings.sections.clients.title} />
        <StyledClientSectionDescription>
          {strings.sections.clients.description}{' '}
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
