import React from "react";
import './Parents.css';
import imgBag from '../assets/img/bag.png';
import imgBooks from '../assets/img/books.png';
import imgAcadem from '../assets/img/academic.png';

function Parents() {
    return (
        <section id="parents" className="parents">
            <div className="parents-text">
            <h1>Что предлагает наша <span className="yellow-text">онлайн-платформа</span>?</h1>
                <span>
                    Онлайн-платформа "Дай пять" - специально создана для развития дошкольников! 
                    На нашем сайте Ваш ребенок сможет выполнять задания, которые создают преподаватели. У вас будет возможность просматривать статистику выполнения заданий вашими детьми. 
                    Наш простой интерфейс понятен для детей и обладает приятным дизайном. 
                    Не откладывайте развитие вашего малыша на потом - присоединяйтесь к нам на сайте "Дай пять" и позвольте вашему ребенку раскрыть свой потенциал уже сегодня!
                </span>
            </div>
            <div className="content-parents">
                <div className="cards">
                    <div className="card">
                        <div className="card-wrapper">
                            <img src={imgBag} alt="card" />
                            <div className="card-line"></div>
                        </div>
                        <div className="card-text">
                            <span>Вы сможете легко и эффективно подготовить Вашего ребенка к школе.</span>
                        </div>
                    </div>

                    <div className="card-second">
                    <div className="card-wrapper">
                            <img src={imgBooks} alt="card" />
                            <div className="card-line"></div>
                        </div>
                        <div className="card-text">   
                            <span>Ребенок будет выполнять задания от преподавателей и изучать учебные материалы.</span>
                        </div>
                    </div>

                    <div className="card">
                    <div className="card-wrapper">
                            <img className="img-academ" src={imgAcadem} alt="card" />
                            <div className="card-line"></div>
                        </div>
                        <div className="card-text">
                            <span>Вы сможете следить за успехами Вашего ребенка в личном кабинете.</span>
                        </div>
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