import React, { useState } from 'react';
import * as S from './register-styled';

const RegisterPage: React.FC = () => {
    const [userData, setUserData] = useState({
      name: '',
      cpf: '',
      birthDate: '',
      email: '',
      password: '',
      type: '',
      phoneNumber: '',
      cep: '',
      houseNumber: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
  
    const handleSubmit = async () => {
      try {
        await fetch('https://quickbeautyapi.onrender.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        alert('Cadastro realizado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar usuário.');
        console.error('Erro:', error);
      }
    };

  return (
    <S.Container>
      <S.Input
        type="text"
        name="name"
        className='input input-name'
        placeholder="Nome de usuário"
        value={userData.name}
        onChange={handleChange}
      />
      <S.Input
        type="text"
        name="cpf"
        className='input input-cpf'
        placeholder="CPF"
        value={userData.cpf}
        onChange={handleChange}
      />
      <S.Input
        type="text"
        name="birthDate"
        className='input input-birthdate'
        placeholder="Data de Nascimento"
        value={userData.birthDate}
        onChange={handleChange}
      />
      <S.Input
        type="text"
        name="email"
        placeholder="Email"
        className='input input-email'
        value={userData.email}
        onChange={handleChange}
      />
      <S.Input
        type="password"
        name="password"
        placeholder="Senha"
        className='input input-password'
        value={userData.password}
        onChange={handleChange}
      />
    <S.Select
        name="type"
        value={userData.type}
        onChange={handleSelectChange}
        className='select'
    >
        <option value="cliente">Cliente</option>
        <option value="profissional">Profissional</option>
    </S.Select>
      <S.Input
        type="text"
        name="phoneNumber"
        className='input input-phone-number'
        placeholder="Número de Telefone"
        value={userData.phoneNumber}
        onChange={handleChange}
      />
      <S.Input
        type="text"
        name="cep"
        className='input input-password'
        placeholder="CEP"
        value={userData.cep}
        onChange={handleChange}
      />
      <S.Input
        type="text"
        name="houseNumber"
        className='input input-password'
        placeholder="Número da Casa"
        value={userData.houseNumber}
        onChange={handleChange}
      />
      <S.Button onClick={handleSubmit}>Criar</S.Button>
    </S.Container>
  );
};

export default RegisterPage;
