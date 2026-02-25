import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div style={{ margin: '20px' }}>
        <h2>
          Welcome to <span className='header'>Career Portal</span>
        </h2>
        <p className='parOnePage'>
          Твоя кар’єра починається тут. Створи акаунт і зроби перший крок вже сьогодні.
        </p>
        <button onClick={() => loginWithRedirect()}>
          Зареєструватися
        </button>
      </div>
    )
  );
};

export default Login;
