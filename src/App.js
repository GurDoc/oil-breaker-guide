import React, { useState, useEffect } from "react";
import './styles.css';
import './App.css';  // Импортируем файл стилей


// Массив с данными по выключателям
const breakers = [
  {
    model: "ВМП-10 (600,1000,1500)",
    fullStroke: "240+5 мм",
    movingContactStroke: "60+3/-5 мм",
    spareStroke: ">= 4 мм",
    contactTouchDifference: "<=5 мм",
    springBufferStroke: "Около 21 мм",
    springBufferGap: "47 мм",
    oilBufferStroke: "87+2/-2 мм",
    oilBufferLevel: "50/40/35 мм",
    angleOfDrive: "3.6+0.5/-0.5 м/с",
    resistance: "<=4.5 мкОм",
    speedOnTouch: "3.5+0.3/-0.5 м/с",
    fullSpeedOn: "<=5 м/с",
    speedOffTouch: "3.5+0.3/-0.5 м/с",
    fullSpeedOff: "<=5 м/с"
  },
  {
    model: "ВМГ-133",
    fullStroke: "250+5 мм",
    movingContactStroke: "40+5 мм",
    spareStroke: "25-30 мм",
    contactTouchDifference: "<=5 мм",
    springBufferStroke: "14+1/-1 мм",
    springBufferGap: "0.5-1.5 мм",
    oilBufferStroke: "24+1 мм",
    oilBufferLevel: "10 мм",
    angleOfDrive: "90+2/-2°",
    resistance: "90+2/-2 мкОм",
    speedOnTouch: "2.9 м/с",
    fullSpeedOn: "3 м/с",
    speedOffTouch: "1.75 м/с",
    fullSpeedOff: "3 м/с"
  },
  {
    model: "ВМГ-10",
    fullStroke: "210+5/210-5 мм",
    movingContactStroke: "45+5/-5 мм",
    spareStroke: "25+5/-5 мм",
    contactTouchDifference: "<=5 мм",
    springBufferStroke: "20+1/-1 мм",
    springBufferGap: "45 мм",
    oilBufferStroke: "90+2/-2 мм",
    oilBufferLevel: "78°",
    angleOfDrive: "2.3 м/с",
    resistance: "2.3 мкОм",
    speedOnTouch: "2.3 м/с",
    fullSpeedOn: "2.4 м/с",
    speedOffTouch: "3.9 м/с",
    fullSpeedOff: "3.9 м/с"
  },
  {
    model: "МГГ-10",
    fullStroke: "290+10 мм",
    movingContactStroke: "Д.Г. 95 мм",
    spareStroke: "25 мм",
    contactTouchDifference: "<=5 мм",
    springBufferStroke: "До половины корпуса",
    springBufferGap: "Д.Г. 260/26",
    oilBufferStroke: "Д.Г. 1.4",
    oilBufferLevel: "Д.Г. 1.7",
    angleOfDrive: "Эл. 1.2/ДГ 2.1",
    resistance: "2.85 мкОм",
    speedOnTouch: "1.4 м/с",
    fullSpeedOn: "1.7 м/с",
    speedOffTouch: "2.1 м/с",
    fullSpeedOff: "2.85 м/с"
  },
  {
    model: "МГ-20",
    fullStroke: "500-25 мм",
    movingContactStroke: "90+2/-2 мм",
    spareStroke: "Не указано",
    contactTouchDifference: "Не указано",
    springBufferStroke: "Не указано",
    springBufferGap: "Не указано",
    oilBufferStroke: "Д.Г. не более 300",
    oilBufferLevel: "Д.Г. 2+0.2/-0.2",
    angleOfDrive: "Не указано",
    resistance: "ДГ 1.8+0.2/-0.2",
    speedOnTouch: "Не указано",
    fullSpeedOn: "Не указано",
    speedOffTouch: "Не указано",
    fullSpeedOff: "Не указано"
  },
  {
    model: "ВМП-10Э (2500)",
    fullStroke: "295-5 мм",
    movingContactStroke: "80+3/-5 мм",
    spareStroke: "Вкл 4-8/Откл 5 мм",
    contactTouchDifference: "<=7 мм",
    springBufferStroke: "58 мм",
    springBufferGap: "21+1/-1 мм",
    oilBufferStroke: "47 мм",
    oilBufferLevel: "90+1/-1 мм",
    angleOfDrive: "Раб. 19, Д.Г. 30, Полн 14 мм",
    resistance: "3.6-4.4 мкОм",
    speedOnTouch: "4+0.4/-0.4 м/с",
    fullSpeedOn: "3.1-3.6 м/с",
    speedOffTouch: "3.8-4.6 м/с",
    fullSpeedOff: "3.1-3.6 м/с"
  },
  {
    model: "ВКЭ-10 (600,1000)",
    fullStroke: "140-4 мм",
    movingContactStroke: "30 мм",
    spareStroke: "Не указано",
    contactTouchDifference: "Не указано",
    springBufferStroke: "19.5 мм",
    springBufferGap: "Не указано",
    oilBufferStroke: "Не указано",
    oilBufferLevel: "Не указано",
    angleOfDrive: "60/45",
    resistance: "4 мкОм",
    speedOnTouch: "3.2 м/с",
    fullSpeedOn: "Не указано",
    speedOffTouch: "Не указано",
    fullSpeedOff: "Не указано"
  },
  {
    model: "ВМПЭ-10 (630,1000,1600)",
    fullStroke: "208+3/208-5 мм",
    movingContactStroke: "------- мм",
    spareStroke: "Вкл 3/Откл 6 мм",
    contactTouchDifference: "<=5 мм",
    springBufferStroke: "21+1/-1 мм",
    springBufferGap: "45 мм",
    oilBufferStroke: "55/45/32 мм",
    oilBufferLevel: "4.8/5.2 м/с",
    angleOfDrive: "3.2 м/с",
    resistance: "Не указано",
    speedOnTouch: "Не указано",
    fullSpeedOn: "Не указано",
    speedOffTouch: "Не указано",
    fullSpeedOff: "Не указано"
  },
  {
    model: "МГ-10",
    fullStroke: "420+20/420-10 мм",
    movingContactStroke: "90+2/-2 мм",
    spareStroke: "Не указано",
    contactTouchDifference: "Д.Г. не более 300 мм",
    springBufferStroke: "Не указано",
    springBufferGap: "Не указано",
    oilBufferStroke: "Не указано",
    oilBufferLevel: "Не указано",
    angleOfDrive: "Не указано",
    resistance: "Не указано",
    speedOnTouch: "Не указано",
    fullSpeedOn: "Не указано",
    speedOffTouch: "Не указано",
    fullSpeedOff: "Не указано"
  }
];

export default function OilBreakerGuide() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const body = document.body;
    if (!body.classList.contains('dark') && !body.classList.contains('light')) {
      body.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');
  };

  const handleClearInput = () => {
    setQuery("");
    setSuggestions([]); // добавляем очистку подсказок
  };
  
  

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  const filtered = breakers.filter((b) =>
    b.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="header">Справочник по масляным выключателям</h1>

      {/* Контейнер для поиска */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по модели (например, ВМП-10)"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            if (value.length > 0) {
              const filteredSuggestions = breakers
                .filter((b) =>
                  b.model.toLowerCase().includes(value.toLowerCase())
                )
                .map((b) => b.model);
              setSuggestions(filteredSuggestions.slice(0, 3)); // максимум 5 подсказок
            } else {
              setSuggestions([]);
            }
          }}
          className="input"
        />
        
        {/* Кнопка крестик для очистки поля ввода */}
        {query && (
          <button className="clear-button" onClick={handleClearInput}>
            ✖
          </button>
        )}
      </div>

      {/* Отображение подсказок */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, idx) => (
            <li
              key={idx}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Кнопка переключения темы */}
      <button className="theme-toggle" onClick={toggleTheme}>
        Переключить тему
      </button>

      {/* Отображение информации о моделях */}
      <div className="card-container">
        {filtered.map((b, idx) => (
          <div key={idx} className="card">
            <div className="card-content">
              <h2 className="card-title">{b.model}</h2>
              <p><strong>Полный ход:</strong> {b.fullStroke}</p>
              <p><strong>Ход подвижных контактов:</strong> {b.movingContactStroke}</p>
              <p><strong>Запасной ход:</strong> {b.spareStroke}</p>
              <p><strong>Неодновременность касания:</strong> {b.contactTouchDifference}</p>
              <p><strong>Ход пружинного буфера:</strong> {b.springBufferStroke}</p>
              <p><strong>Зазор в пружинном буфере:</strong> {b.springBufferGap}</p>
              <p><strong>Ход масляного буфера:</strong> {b.oilBufferStroke}</p>
              <p><strong>Уровень масла в масляном буфере:</strong> {b.oilBufferLevel}</p>
              <p><strong>Угол поворота:</strong> {b.angleOfDrive}</p>
              <p><strong>Переходное сопротивление:</strong> {b.resistance}</p>
              <p><strong>Скорость включения (касание контактов):</strong> {b.speedOnTouch}</p>
              <p><strong>Полная скорость включения:</strong> {b.fullSpeedOn}</p>
              <p><strong>Скорость отключения (размыкание):</strong> {b.speedOffTouch}</p>
              <p><strong>Полная скорость отключения:</strong> {b.fullSpeedOff}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="drive-section">
        <h2>Приводы выключателей</h2>
        <p>Здесь будет информация о приводах выключателей.</p>
      </section>
    </div>
  );
}