import React, { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserClick = (event) => {
    event.preventDefault();
    setIsUserMenuOpen((isOpen) => !isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="#top" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="_dark header__logo">
            <a href="#top" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </div>

          <nav className="header__nav">
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </button>

            <button
              type="button"
              className="header__user _hover02"
              onClick={handleUserClick}
            >
              Ivan Ivanov
            </button>

            {isUserMenuOpen && <PopUser />}
          </nav>
        </div>
      </div>
    </header>
  );
}
