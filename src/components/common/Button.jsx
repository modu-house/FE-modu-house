import * as React from 'react';
import styled, { css } from 'styled-components';
import media from '../../styles/media';
import theme from '../../styles/theme';

const ButtonBlock = styled.button`
  width: ${(props) => props.width};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  background: ${(props) => props.bgcolor || theme.colors.primary1};
  color: ${(props) => props.color || theme.colors.button_text};
  &:active {
    background: ${(props) => props.bgcolor || theme.colors.primary3};
  }
  border-radius: 10px;
  padding-top: 0;
  padding-bottom: 0;
  ${(props) =>
    props.inline &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${(props) =>
    props.responsive &&
    css`
      ${media.small} {
        height: 1.5rem;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
        font-size: 0.75rem;
      }
    `}
  ${(props) =>
    props.outlined &&
    css`
      & {
        background-color: ${(props) => props.bgcolor || '#fff'};
        border: 0.25px solid ${(props) => props.color || theme.colors.text1};
      }
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `}
    ${(props) =>
    props.size === 'large' &&
    css`
      height: 2.5rem;
      padding-left: 1.125rem;
      padding-right: 1.125rem;
      & + & {
        margin-left: 0.875rem;
      }
      font-size: 1.125rem;
    `}
    &:disabled {
    cursor: not-allowed;
    background: ${theme.colors.text2};
    color: ${theme.colors.button_text};
    &:hover {
      background: ${theme.colors.primary1};
      color: ${theme.colors.button_text};
    }
  }
`;

function Button({
  children,
  ref,
  bgcolor,
  color,
  inline,
  size = 'medium',
  width = 'auto',
  responsive = false,
  outlined = false,
  ...rest
}) {
  const htmlProps = rest;
  return (
    <ButtonBlock
      bgcolor={bgcolor}
      color={color}
      inline={inline}
      width={width}
      size={size}
      responsive={responsive}
      outlined={outlined}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        e.target.blur();
      }}
    >
      {children}
    </ButtonBlock>
  );
}

export default Button;
