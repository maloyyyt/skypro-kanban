import React, { useEffect, useState } from "react";
import Column from "../Column/Column";
import cardsData from "../../data";

const columnTitles = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loader">Данные загружаются</div>
          ) : (
            <div className="main__content">
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  cards={cardsData.filter((card) => card.status === title)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
