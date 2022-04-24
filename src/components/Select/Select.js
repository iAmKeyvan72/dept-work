import React from 'react';
import { StyledSelect } from './style';

const Select = ({ label, name, options, ...rest }) => (
  <StyledSelect>
    <label htmlFor={name}>{label}</label>
    <select id={name} name={name} {...rest}>
      {options.map((option, index) => (
        <option key={option + index} value={index === 0 ? undefined : option}>
          {option}
        </option>
      ))}
    </select>
  </StyledSelect>
);

export default Select;
