// components/Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e91e63;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;