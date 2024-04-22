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
                    <div className="logo-footer">
                        <div className="inner_logo">
                            <img src={imgLogo} alt="logo" />
                            <span>Дай пять</span>
                        </div>
                    <span>Современная платформа дошкольного онлайн-образования</span>
                    </div>
                    <div className="disc">
                        <img src={imgUser} alt="user" />
                        <a className="underLine" href="#">Личный кабинет</a>
                    </div>
                    <div className="disc">
                        <img src={imgTg} alt="tg" />
                        <a className="underLine" href="#">Написать в Telegram</a>
                    </div>
                    <div className="disc">
                        <img src={imgWhApp} alt="whatsapp" />
                        <a className="underLine" href="#">Написать в WhatsApp</a>
                    </div>
                </article>

                <article className="about-platform">
                    <p>О платформе</p>
                    <a href="#home">Главная</a>
                    <a href="#parents">Родителям</a>
                    <a href="#preschoolers">Детям</a>
                    <a href="#teacher">Преподавателям</a>
                </article>

                <article className="contacts">
                    <div className="cont">
                        <img src={imgLocation} alt="location" />
                        <span>Адрес: 292929 Россия, Город, Улица 123</span>
                    </div>
                    <div className="cont">
                        <img src={imgEmail} alt="email" />
                        <span>Email: example@email.ru</span>
                    </div>
                    <div className="cont">
                        <img src={imgPhone} alt="phone" />
                        <span>Телефон: +7 (000) 000-00-00</span>
                    </div>
                    <div className="cont">
                        <img src={imgWebsite} alt="website" />
                        <span>Сайт разработан: <a href="https://amexwebdev.vercel.app/">amexwebdev</a></span>
                    </div>
                </article>

            </div>
            <div className="footer-line"></div>
            <span className="footer_span">© 2024 Дай пять</span>
        </section>
    )
}

export default Footer;