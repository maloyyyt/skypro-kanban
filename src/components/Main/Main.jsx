import React from "react";
import Column from "../Column/Column";

const columns = [
  {
    "title": "Без статуса",
    "cards": [
      {
        "category": "Web Design",
        "themeClass": "card__theme _orange"
      },
      {
        "category": "Research",
        "themeClass": "card__theme _green"
      },
      {
        "category": "Web Design",
        "themeClass": "card__theme _orange"
      },
      {
        "category": "Copywriting",
        "themeClass": "card__theme _purple"
      },
      {
        "category": "Web Design",
        "themeClass": "card__theme _orange"
      }
    ]
  },
  {
    "title": "Нужно сделать",
    "cards": [
      {
        "category": "Research",
        "themeClass": "card__theme _green"
      }
    ]
  },
  {
    "title": "В работе",
    "cards": [
      {
        "category": "Research",
        "themeClass": "card__theme _green"
      },
      {
        "category": "Copywriting",
        "themeClass": "card__theme _purple"
      },
      {
        "category": "Web Design",
        "themeClass": "card__theme _orange"
      }
    ]
  },
  {
    "title": "Тестирование",
    "cards": [
      {
        "category": "Research",
        "themeClass": "card__theme _green"
      }
    ]
  },
  {
    "title": "Готово",
    "cards": [
      {
        "category": "Research",
        "themeClass": "card__theme _green"
      }
    ]
  }
];

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => (
              <Column key={column.title} title={column.title} cards={column.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
