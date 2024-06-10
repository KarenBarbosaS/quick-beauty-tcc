// components/InputField.tsx
import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  className?: string;
}

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  `;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
  `;

const Input = styled.input<{ isError?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ isError }) => (isError ? 'red' : '#ccc')};
  border-radius: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const InputField: React.FC<InputFieldProps> = ({ label, id, type, placeholder, onChange, value, error, className }) => {
  return (
    <FieldWrapper className={`input ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} isError={!!error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldWrapper>
  );
};

export default InputField;
