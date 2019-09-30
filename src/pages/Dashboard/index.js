import React, { useEffect, useState } from 'react';

import { Container, Logout } from './styles';
import { getToken, logout } from '../../services/auth';
import { history } from '../../services/history';

export default function Dashboard() {
  const [loggedUser, setLoggedUser] = useState('');

  useEffect(() => {
    if (getToken !== null) {
      setLoggedUser(getToken())
    }
  }, [])

  function handleLogout() {
    logout();
    history.push('/');
  }

  return (
    <Container>
      <div>
        <h1>Dashboard Page</h1>
        <p>Bem vindo {loggedUser}.</p>
        <Logout onClick={handleLogout}>Logout</Logout>
      </div>

    </Container>
  )
}
