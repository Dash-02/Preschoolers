import React from "react";
import './Teachers.css';
import imgMan from '../assets/img/man.png';
import imgMan2 from '../assets/img/man2.png';
import imgMark from '../assets/icons/mark_check.svg';

function Teacher() {
    return (
        <section className="teacher">
            <h1>Хотите стать <span className="yellow-text">соавтором</span> платформы "Дай пять"?</h1>
            <p>Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  proident.</p>
            <div className="container">
                <img className="man" src={imgMan} alt="man" />
                <div className="list">
                    <img src={imgMark} alt="check-mark" />
                    <p>Зарегистрируйтесь на сайте как преподаватель</p>
                </div>
                <div className="author">
                    <button className="btn-author">
                        Стать соавтором
                    </button>
                    <img className="man2" src={imgMan2} alt="man2" />
                </div>
            </div>
        </section>
    )
}

export default Teacher;