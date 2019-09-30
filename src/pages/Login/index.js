import React, { useState } from 'react';

import { Container, Form, Input, SubmitButton, Error } from './styles.js';
import { history } from '../../services/history';

import { login } from '../../services/auth';


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const validUser = {
    email: 'admin@admin.com',
    password: 'admin'
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password === validUser.password && email === validUser.email) {
      login(email);
      history.push('/dashboard');
    } else {
      setError(true);
    }

  }

  return (
    <Container>
      <h1>Login form</h1>
      <Form onSubmit={handleSubmit}>
        {error && <Error>Erro ao realizar o Login. Verifique seus dados.</Error>}
        <label htmlFor="email">E-mail</label>
        <Input id="email" type="email" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)} />
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
    </Container>
  )
}
