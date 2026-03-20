# User Portal

Full-stack веб-застосунок для подачі та збереження кар’єрних анкет з реалізованою безпечною аутентифікацією користувачів.
Проєкт демонструє практичну реалізацію клієнт-серверної архітектури, захищених маршрутів, JWT-авторизації та деплой повноцінного застосунку в хмарне середовище.

## Live Demo

Frontend:  
https://user-portal-1-agps.onrender.com/

Backend API (Render):  
https://user-portal-39o0.onrender.com  

## Опис проєкту

Додаток, у якому користувач може:

- Зареєструватися / увійти через Auth0
- Отримати доступ до захищеного особистого кабінету
- Заповнити кар’єрну анкету
- Зберегти дані в MongoDB через REST API

Основний фокус проєкту — реалізація безпечної аутентифікації та повної взаємодії frontend ↔ backend.

## Архітектура

React (SPA клієнт)  
⬇  
Node.js + Express (REST API)  
⬇  
MongoDB (база даних)

Аутентифікація реалізована через Auth0 з використанням JWT access token.

## Використані технології

### Frontend
- React
- React Router
- Auth0
- Axios / Fetch API
- Netlify (деплой)

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Render (деплой)

### Безпека
- Auth0
- Middleware для захисту API-маршрутів
- Зберігання конфіденційних даних через environment variables
  
