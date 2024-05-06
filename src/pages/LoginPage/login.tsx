import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./login-styled";
import logo from "../../assets/logo.svg";

const LoginPage: React.FC = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    error: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (formValues.username && formValues.password) {
      try {
        const response = await fetch(
          "https://quickbeautyapi.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: formValues.username,
              password: formValues.password,
            }),
          }
        );

        if (response.ok) {
            setFormValues({
                ...formValues,
                error: "Email ou senha inválidos. Tente novamente",
            });
        } else {
            navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
        setFormValues({
          ...formValues,
          error: "Ocorreu um erro. Tente novamente mais tarde.",
        });
      }
    } else {
      setFormValues({
        ...formValues,
        error: "Por favor, preencha todos os campos",
      });
    }
  };

  const { username, password } = formValues;
  const setUsername = (value: string) =>
    setFormValues({ ...formValues, username: value });
  const setPassword = (value: string) =>
    setFormValues({ ...formValues, password: value });

  return (
    <S.Container>
      <S.Content>
        <S.LogoContent>
          <img src={logo} alt="Logo" className="logo" />
        </S.LogoContent>
        <S.InputText
          type="text"
          placeholder="E-mail"
          className="input-email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <S.InputText
          type="password"
          placeholder="Senha"
          className="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.ButtonEnter onClick={handleLogin}>Login</S.ButtonEnter>
        {formValues.error && <p className="error-message">{formValues.error}</p>}

        <S.LinkToRegister href="/register">Não possuo conta</S.LinkToRegister>
      </S.Content>
    </S.Container>
  );
};

export default LoginPage;
