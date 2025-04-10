// Подключение стилей
import './styles.css';

import React, { useState } from "react";

// Массив с данными для выключателей
const breakers = [
  {
    model: "ВМП-10",
    voltage: "10 кВ",
    current: "630–1600 А",
    weight: "~220 кг",
    oil: "4.5 л",
    resistance: "≤ 50 мкОм",
    notes: "С ручным и приводным управлением. Подходит для КРУ и КСО."
  },
  {
    model: "ВМГ-133",
    voltage: "6/10 кВ",
    current: "400–630 А",
    weight: "~180 кг",
    oil: "~30 л",
    resistance: "≤ 80 мкОм",
    notes: "Популярен в старых сетях. Предназначен для ЗРУ на ячейки КСО."
  },
  {
    model: "ВКЭ-10",
    voltage: "10 кВ",
    current: "630–1600 А",
    weight: "~150 кг",
    oil: "~35 л",
    resistance: "≤ 60 мкОм",
    notes: "С электромагнитным приводом. Колонкового типа с малым объёмом масла."
  },
  {
    model: "ВМГ-10",
    voltage: "6/10 кВ",
    current: "630–1000 А",
    weight: "~200 кг",
    oil: "~20 л",
    resistance: "≤ 80 мкОм",
    notes: "Масляный выключатель с малым объёмом масла."
  },
  {
    model: "МГГ-10",
    voltage: "6/10 кВ",
    current: "2000–5000 А",
    weight: "~300 кг",
    oil: "20 кг",
    resistance: "≤ 40 мкОм",
    notes: "Генераторный выключатель, рассчитан на высокий ток отключения."
  },
];

export default function OilBreakerGuide() {
  const [query, setQuery] = useState("");
  const filtered = breakers.filter(b =>
    b.model.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Справочник по масляным выключателям</h1>
      <input
        type="text"
        placeholder="Поиск по модели (например, ВМП-10)"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={styles.input}
      />
      <div style={styles.cardContainer}>
        {filtered.map((b, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardContent}>
              <h2 style={styles.cardTitle}>{b.model}</h2>
              <p><strong>Напряжение:</strong> {b.voltage}</p>
              <p><strong>Номинальный ток:</strong> {b.current}</p>
              <p><strong>Масса:</strong> {b.weight}</p>
              <p><strong>Объём масла:</strong> {b.oil}</p>
              <p><strong>Переходное сопротивление:</strong> {b.resistance}</p>
              <p><strong>Примечание:</strong> {b.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fafafa",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  cardContent: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
};
