/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    color: ${
      props => props.secondary ? "var(--black)" : "var(--white)"
    };
    border: 1px solid var(--black);
    background: ${
      props => props.secondary ? "var(--mediumGrey)" : "var(--primary)"
    };
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
