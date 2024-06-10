// src/pages/FormPage.tsx
import React, { useState } from "react";
import InputField from "../../components/Inputs/InputText/input-text";
import SelectField from "../../components/Select/select";
import Button from "../../components/Button/button";
import FormContainer from "../../components/Forms/FormContainer/form-container";
import ImageUpload from "../../components/UploadImage/upload-image";
import { applyMask, masks } from "../../utils/maskUtils";
import * as S from "./register-styled";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    cpf: "",
    dateOfBirth: "",
    email: "",
    password: "",
    type: "Cliente",
    phoneNumber: "",
    cep: "",
    houseNumber: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    let newValue = value;

    if (id === "cpf") {
      newValue = applyMask(value, masks.cpf);
    } else if (id === "phoneNumber") {
      newValue = applyMask(value, masks.phone);
    } else if (id === "cep") {
      newValue = applyMask(value, masks.cep);
    }

    setFormData((prev) => ({ ...prev, [id]: newValue }));
  };

  const handleImageSelect = (file: File) => {
    setProfileImage(file);
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    const {
      username,
      cpf,
      dateOfBirth,
      email,
      password,
      phoneNumber,
      cep,
      houseNumber,
    } = formData;

    if (!username) newErrors.push("Nome é obrigatório");
    if (!cpf || cpf.length < 14) newErrors.push("CPF inválido");
    if (!dateOfBirth) newErrors.push("Data de nascimento é obrigatória");
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.push("E-mail inválido");
    if (!password || password.length < 6)
      newErrors.push("A senha deve ter pelo menos 6 caracteres");
    if (!phoneNumber || phoneNumber.length < 14)
      newErrors.push("Telefone inválido");
    if (!cep || cep.length < 9) newErrors.push("CEP inválido");
    if (!houseNumber) newErrors.push("Número da casa é obrigatório");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const form = new FormData();
      form.append("username", formData.username);
      form.append("cpf", formData.cpf);
      form.append("dateOfBirth", formData.dateOfBirth);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("type", formData.type);
      form.append("phoneNumber", formData.phoneNumber);
      form.append("cep", formData.cep);
      form.append("houseNumber", formData.houseNumber);
      if (profileImage) {
        form.append("profileImage", profileImage);
      }

      const response = await fetch(
        "https://quickbeautyapi.onrender.com/users",
        {
          method: "POST",
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar usuário.");
      }

      const data = await response.json();
      alert("Usuário criado com sucesso!");
      console.log(data);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <FormContainer>
      <h1>Cadastro de Usuário</h1>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <ImageUpload onImageSelect={handleImageSelect} />
      <S.Content>
        <InputField
          label="Nome"
          id="username"
          type="text"
          placeholder="Digite seu nome"
          onChange={handleChange}
          className="name-input input"
        />
        <InputField
          label="CPF"
          id="cpf"
          type="text"
          placeholder="Digite seu CPF"
          onChange={handleChange}
          value={formData.cpf}
          className="cpf-input input"
        />
        <InputField
          label="Data de Nascimento"
          id="dateOfBirth"
          type="date"
          onChange={handleChange}
          value={formData.dateOfBirth}
          className="birth-input input"
        />
        <InputField
          label="E-mail"
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          onChange={handleChange}
          value={formData.email}
          className="email-input input"
        />
        <InputField
          label="Senha"
          id="password"
          type="password"
          placeholder="Digite sua senha"
          onChange={handleChange}
          value={formData.password}
          className="password-input input"
        />
        <SelectField
          label="Tipo de Usuário"
          id="type"
          options={[
            { value: "Cliente", label: "Cliente" },
            { value: "Professional", label: "Profissional" },
          ]}
          onChange={handleChange}
          value={formData.type}
          className="type-select select"
        />
        <InputField
          label="Telefone"
          id="phoneNumber"
          type="text"
          placeholder="Digite seu telefone"
          onChange={handleChange}
          value={formData.phoneNumber}
          className="tel-input input"
        />
        <InputField
          label="CEP"
          id="cep"
          type="text"
          placeholder="Digite seu CEP"
          onChange={handleChange}
          value={formData.cep}
          className="cep-input input"
        />
        <InputField
          label="Número da Casa"
          id="houseNumber"
          type="text"
          placeholder="Digite o número da casa"
          onChange={handleChange}
          value={formData.houseNumber}
          className="number-input input"
        />
      </S.Content>
      <Button label="Criar" onClick={handleSubmit} />
    </FormContainer>
  );
};

export default FormPage;
