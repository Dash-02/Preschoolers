import React, { useState } from "react";
import './Header.css';
import logo from '../assets/icons/logo.svg';
import Auth from '../Auth/Auth.jsx';
import imgX from '../assets/img/auth/x.svg';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        isOpenMenu(true);
    };

    const closeOpenMenu = () => {
        isOpenMenu(false);
    };

    const closeMenu = () => {
        isOpenMenu(false);
    };

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
                    <a href="#preschoolers">Детям</a>
                    <a href="#teacher">Преподавателям</a>
                </nav>
                <div className="btn-login">
                    <button><a href="https://deploy-panel-for-learn.vercel.app/login">Войти в личный кабинет</a></button>
                    <button onClick={openPopup}>Зарегистрироваться</button>
                </div>
                <div className="menu">
                    <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
                    <label htmlFor="burger-checkbox" className="burger"></label>
                    <nav className="menu-list">
                        <div className="menu-items">
                            <a href="#home" onClick={closeMenu} >Главная</a>
                            <a href="#parents" onClick={closeMenu}>Родителям</a>
                            <a href="#preschoolers" onClick={closeMenu}>Детям</a>
                            <a href="#teacher" onClick={closeMenu}>Преподавателям</a>
                            <button><a href="https://deploy-panel-for-learn.vercel.app/login">Войти в личный кабинет</a></button>
                            <button onClick={openPopup}>Зарегистрироваться</button>
                        </div>
                        <div className="menu-bottom"></div>
                    </nav>
                </div>
                {isOpen && (
                    <div className="backdrop">
                    <div id="popup">
                        <button className="btn-x" onClick={closePopup}>
                            <img src={imgX} alt="x" />
                        </button>
                        <Auth />
                    </div>

                    </div>
                )}
            </section>
        </div>
    )
}

export default Header;