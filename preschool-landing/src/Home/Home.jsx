import React, { useState } from "react";
import './Home.css';
import Header from '../Header/Header.jsx';
import imgArrow from '../assets/img/Arrow.png';
import imgBooks from '../assets/img/vecteezy_book.png';
import tg from '../assets/icons/telegramm.svg';
import whatsapp from '../assets/icons/watsapp.svg';
import imgX from '../assets/img/auth/x.svg';
import AuthTeacher from '../Auth/AuthParent.jsx';


function Home() {
    const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
    return (
        <section id="home" className={"home"}>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="text_wrapper">
                        <h1>Онлайн-платформа для <span className="yellow-text">дошкольного</span> образования</h1>
                        <span>
                            Добро пожаловать на нашу платформу "Дай пять", где процесс обучения становится увлекательным и эффективным для самых маленьких. Мы предлагаем уникальные тесты и материалы, разработанные специально для дошкольного образования. Наши уроки помогут детям развивать навыки, осваивать новые знания и готовиться к школе, играя и веселясь. Давайте вместе откроем великий мир обучения!
                        </span>
                    </div>
                    <div className="home-content-wrapper">
                    <img src={imgArrow} alt="arrow" className="img-arrow" />
                        
                        <div className="wrapper_social_media">
                            <button onClick={openPopup}>Записаться на обучение</button>
                            <div className="social_media">
                                <span>или написать:</span>
                                <a href="#"><img src={tg} alt="telegram" /></a>
                                <a href="#"><img src={whatsapp} alt="whatsApp" /></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <img className="img-books" src={imgBooks} alt="books" />
                
            </div>
            {isOpen && (
                <div className="backdrop">
                <div id="popup">
                    <button className="btn-x" onClick={closePopup}>
                        <img src={imgX} alt="x" />
                    </button>
                    <AuthTeacher />
                </div>
                </div>
            )}
        </section>
    )
}

export default Home;