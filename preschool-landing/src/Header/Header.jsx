import React from "react";
import './Header.css';
import logo from '../assets/icons/logo.svg';

function Header() {
    return (
        <div className="container-header">
            <section className="header">
                <div className="logo">
                    <img className="img-logo" src={logo} alt="logo" />
                    <button className="btn-logo">
                        Дай пять!
                    </button>
                </div>
                <nav>
                    <a href="#home">Главная</a>
                    <a href="#parents">Родителям</a>
                    <a href="#preschooler">Детям</a>
                    <a href="#teacher">Преподавателям</a>
                </nav>
                <div className="btn-login">
                    <button>Войти в личный кабинет</button>
                    <button>Зарегистрироваться</button>
                </div>
                <div className="menu">
                    <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
                    <label htmlFor="burger-checkbox" className="burger"></label>
                    <nav className="menu-list">
                        <div className="menu-items">
                            <a href="#home">Главная</a>
                            <a href="#parents">Родителям</a>
                            <a href="#preschooler">Детям</a>
                            <a href="#teacher">Преподавателям</a>
                            <button>Войти в личный кабинет</button>
                            <button>Зарегистрироваться</button>
                        </div>
                        <div className="menu-bottom"></div>
                    </nav>
                </div>
            </section>
            {/* <div className="line"></div> */}
        </div>
    )
}

export default Header;