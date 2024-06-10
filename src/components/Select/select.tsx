// components/SelectField.tsx
import React from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  id: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
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

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const SelectField: React.FC<SelectFieldProps> = ({ label, id, options, onChange, value, className }) => {
  return (
    <FieldWrapper className={`select ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FieldWrapper>
  );
};

export default SelectField;
