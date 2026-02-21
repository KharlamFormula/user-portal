import React from 'react';

const Form = () => {
  return (
    <div>
      <h2>Анкета</h2>
      <form
        className='application'
        method='POST'
        action='http://localhost:5000/'
      >
        <label>Ваше ім'я:</label>
        <input type='text' name='name' required />

        <label>Ваша електронна пошта:</label>
        <input type='email' name='email' required />

        <label>Чому хочете працювати з нами:</label>
        <textarea name='message' rows='4' required />

        <button type='submit'>Відправити</button>
      </form>
    </div>
  );
};

export default Form;
