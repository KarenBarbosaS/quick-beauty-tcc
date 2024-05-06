import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .input:focus {
    outline: none;
  }

  .select:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 80px;
  height: 20px;
  padding: 0 16px;
  border: 2px solid #3c3c3c;
`;

export const Select = styled.select`
  border-radius: 10px;
  width: 120px;
  height: 25px;
  padding: 0 16px;
  border: 2px solid #3c3c3c;
`;

export const Button = styled.button`
  background-color: #f498af;
  border-radius: 20px;
  width: 140px;
  height: 45px;
  border: none;
`;
