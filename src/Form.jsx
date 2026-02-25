import React, { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.status === "ok") {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Дякуємо! 🎉</h2>
        <p>Вашу анкету успішно відправлено.</p>
        <button onClick={() => setSubmitted(false)}>
          Заповнити ще раз
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Анкета</h2>
      <form className="application" onSubmit={handleSubmit}>
        <label>Ваше ім'я:</label>
        <input type="text" name="name" required />

        <label>Ваша електронна пошта:</label>
        <input type="email" name="email" required />

        <label>Чому хочете працювати з нами:</label>
        <textarea name="message" rows="4" required />

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default Form;