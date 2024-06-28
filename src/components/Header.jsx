import { React, useState } from "react";
import ImgAtm from "./atom/ImgAtm";

import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";

const Header = () => {
  const [darkActive, setDarkActive] = useState(false);

  const resBtnClick = () => {
    setDarkActive(!darkActive);
    if (!darkActive) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "hidden";
  };

  return (
    <header className="header">
      <a href="/" className="header__logo">
        Onlu
      </a>
      <nav className={`header__nav ${darkActive ? "active" : ""}`}>
        <a href="/" className="header__link">
          Home
        </a>
        <a href="#about" className="header__link">
          About
        </a>
        <a href="#services" className="header__link">
          Services
        </a>
        <a href="#contact" className="header__link">
          Contact
        </a>
      </nav>
      <div
        className={`resBtn ${darkActive ? "active" : ""}`}
        onClick={resBtnClick}
      >
        <ul>
          <li className="menuBtn">
            <ImgAtm srcProp={menu} altProp="메뉴바 링크" />
          </li>
          <li className="closeBtn">
            <ImgAtm srcProp={close} altProp="닫기 링크" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
