import React from "react";
import './Parents.css';
import imgBag from '../assets/img/bag.png';
import imgBooks from '../assets/img/books.png';
import imgAcadem from '../assets/img/academic.png';

function Parents() {
    return (
        <section className="parents">
                <div className="content">
                    <h1>Что предлагает наша <span className="yellow-text">онлайн-платформа</span>?</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <div className="cards">
                        <div className="card">
                            <img src={imgBag} alt="card" />
                            <div className="card-line"></div>
                            <span>Вы сможете легко и эффективно подготовить Вашего ребенка к школе.</span>
                        </div>
                    </div>
                    <div className="banner">
                        <span>
                        Пройдите простую регистрацию на сайте и получите доступ к образовательным материалам!
                        </span>
                    </div>
                </div>
        </section>
    )
}

export default Parents;