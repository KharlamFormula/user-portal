import React, { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      };

      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();

      if (data.status === "ok") {
        setSubmitted(true);
        e.target.reset();
      }

    } catch (error) {
      console.error(error);
      alert("Помилка відправки 😢");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Дякуємо!</h2>
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

        <button type="submit" disabled={loading}>
          {loading ? "Відправка..." : "Відправити"}
        </button>
      </form>
    </div>
  );
};

export default Form;