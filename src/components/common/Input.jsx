import React from 'react';
import styled from 'styled-components';

function Input({ type, placeholder, onChange, value, width }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      width={width}
    />
  );
}

export default Input;

const StyledInput = styled.input`
  width: ${(props) => props.width || '400px'};
  height: 40px;
  font-size: 18px;
  text-indent: 10px;
  border: 2px solid #d3d3d3;
  border-radius: 10px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary1};
  }
`;
