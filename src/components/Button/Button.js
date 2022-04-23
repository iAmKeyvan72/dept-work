import React from 'react';

import {
  StyledButton,
  StyledLinkButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from './style';

const Button = ({ type, ...rest }) => {
  const buttonTypes = {
    primary: { component: StyledPrimaryButton },
    secondary: { component: StyledSecondaryButton },
    link: { component: StyledLinkButton },
  };

  const ButtonComponent = buttonTypes[type].component;

  return <ButtonComponent {...rest} />;
};

export default Button;
