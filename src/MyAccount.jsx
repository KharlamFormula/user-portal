import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className='account-box'>
        <p className='parOnePage'>Вітаємо, <span className='nick'>{user.nickname}</span>!</p>
        <p className='parOnePage'>Раді бачити вас у вашому особистому кабінеті.</p>
        <p className='parOnePage'>Заповніть форму нижче, щоб надіслати свою анкету.</p>
      </div>
    )
  );
};

export default MyAccount;
