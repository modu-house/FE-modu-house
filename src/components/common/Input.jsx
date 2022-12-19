import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Input({ type, placeholder, onChange, value }) {
  const [hasContent, setHasContent] = useState(false);

  const handleFloat = (event) => {
    if (event.target.value !== '') {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  };

  useEffect(() => {
    if (value !== '') {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  }, [value]);

  return (
    <StyledInput>
      <input
        type={type}
        placeholder={placeholder}
        onFocus="this.placeholder = ''"
        onBlur={handleFloat}
        className={hasContent ? 'has-content' : ''}
        onChange={onChange}
        value={value}
      />
    </StyledInput>
  );
}

export default Input;

const StyledInput = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  input {
    width: 400px;
    height: 40px;
    font-size: 18px;
    text-indent: 10px;
    border: 2px solid #d3d3d3;
    border-radius: 10px;
  }

  input:focus,
  input.has-content + ::placeholder {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary1};
    color: ${({ theme }) => theme.colors.primary1};
  }

  input:focus::placeholder {
    color: transparent;
  }
`;
