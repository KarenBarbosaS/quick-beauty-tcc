// src/components/StyledComponent.tsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledComponent: React.FC = () => {
  return (
    <div>
      <StyledButton>Botão Estilizado</StyledButton>
    </div>
  );
}

export default StyledComponent;
