import React from 'react';

import {
  StyledPrimaryButton,
  StyledPrimaryLinkButton,
  StyledSecondaryButton,
  StyledSecondaryLinkButton,
  StyledLinkButton,
} from './style';

const Button = ({ element, uiType, ...rest }) => {
  const buttonTypes = {
    a: {
      primary: { component: StyledPrimaryLinkButton },
      secondary: { component: StyledSecondaryLinkButton },
      link: { component: StyledLinkButton },
    },
    button: {
      primary: { component: StyledPrimaryButton },
      secondary: { component: StyledSecondaryButton },
    },
  };

  const ButtonComponent = buttonTypes[element][uiType].component;

  return <ButtonComponent {...rest} />;
};

export default Button;
