import React from 'react';
import { StyledInputError, StyledInputText } from './style';

const InputText = ({ label, name, register, required, error, ...rest }) => {
  let input = (
    <input id={name} name={name} {...register(name, required)} {...rest} />
  );

  if (rest.element === 'textarea') {
    input = (
      <textarea id={name} name={name} {...register(name, required)} {...rest} />
    );
  }

  return (
    <StyledInputText>
      <label htmlFor={name}>{label}</label>
      {input}
      <StyledInputError>{error}</StyledInputError>
    </StyledInputText>
  );
};

export default InputText;
