import React from 'react';
import { StyledSelect } from './style';

const Select = ({ label, name, options, ...rest }) => {
  return (
    <StyledSelect>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
};

export default Select;
