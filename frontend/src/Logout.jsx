import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Form from './Form';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <Form />
        <button onClick={() => logout()}>
          Вийти
        </button>
      </div>
    )
  );
};

export default Logout;
