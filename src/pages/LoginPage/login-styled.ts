// src/pages/HomePageStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;

  `;

export const Content = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .input-email:focus,
  .input-password:focus {
    outline: none;
  }
`;

export const LogoContent = styled.div`
  .logo {
    margin: 0 auto;
  }
`;

export const InputText = styled.input`
  border-radius: 20px;
  width: 200px;
  height: 40px;
  padding: 0 16px;
  border: 2px solid #3c3c3c;
`;

export const ButtonEnter = styled.button`
  background-color: #f498af;
  border-radius: 20px;
  width: 140px;
  height: 45px;
  border: none;
`;

export const LinkToRegister = styled.a`
    font-size: 1rem;
`;
