import React from "react";
import './Footer.css';
import imgLogo from '../assets/icons/logo.svg';
import imgUser from '../assets/icons/user.svg';
import imgTg from '../assets/icons/tg.svg';
import imgWhApp from '../assets/icons/watsApp.svg';
import imgLocation from '../assets/icons/location.svg';
import imgEmail from '../assets/icons/letter.svg';
import imgPhone from '../assets/icons/phone.svg';
import imgWebsite from '../assets/icons/globus.svg';

function Footer() {
    return (
        <section className="footer">
            <h1>Свяжитесь с <span className="yellow-text">нами</span></h1>
            <div className="footer-container">
                <article className="discription">
                    <div className="logo">
                        <img src={imgLogo} alt="logo" />
                        <p>Дай пять</p>
                    </div>
                    <p>Современная платформа дошкольного онлайн-образования</p>
                    <div className="user">
                        <img src={imgUser} alt="user" />
                        <p className="underLine">Личный кабинет</p>
                    </div>
                    <div className="tg">
                        <img src={imgTg} alt="tg" />
                        <p className="underLine">Написать в Telegram</p>
                    </div>
                    <div className="whatsapp">
                        <img src={imgWhApp} alt="whatsapp" />
                        <p className="underLine">Написать в WhatsApp</p>
                    </div>
                </article>
                <article className="about-platform">
                    <p>О платформе</p>
                    <a href="Main">Главная</a>
                    <a href="parents">Родителям</a>
                    <a href="preschooler">Детям</a>
                    <a href="teacher">Преподавателям</a>
                </article>
                <article className="contacts">
                    <div className="location">
                        <img src={imgLocation} alt="location" />
                        <p>Адрес: 292929 Россия, Город, Улица 123</p>
                    </div>
                    <div className="email">
                        <img src={imgEmail} alt="email" />
                        <p>Email: example@email.ru</p>
                    </div>
                    <div className="phone">
                        <img src={imgPhone} alt="phone" />
                        <p>Телефон: +7 (000) 000-00-00</p>
                    </div>
                    <div className="website">
                        <img src={imgWebsite} alt="website" />
                        <p>Сайт разработан: https://amexwebdev.vercel.app/</p>
                    </div>
                </article>
            </div>
            <div className="footer-line"></div>
            <p>© 2024 Дай пять</p>
        </section>
    )
}

export default Footer;