import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Считываем текущую тему из localStorage или ставим светлую по умолчанию
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Эффект для применения темы
  useEffect(() => {
    document.body.className = theme; // Применяем класс темы к body
    localStorage.setItem('theme', theme); // Сохраняем выбранную тему в localStorage
  }, [theme]);

  // Функция для переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
      </button>
    </div>
  );
};

export default ThemeToggle;