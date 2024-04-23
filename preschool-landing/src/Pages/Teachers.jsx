import React, { useState } from "react";
import './Teachers.css';
import AuthTeacher from '../Auth/AuthTeacher.jsx';

import imgMan from '../assets/img/man.png';
import imgMark from '../assets/icons/mark_check.svg';
import imgMan2 from '../assets/img/man2.png';

import imgX from '../assets/img/auth/x.svg';

function Teacher() {

    const [isOpen, setIsOpen] = useState(false);

  const openPopupT = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

    return (
        <section id="teacher" className="teacher">
            <div className="teacher-text">
                <h1>Хотите стать <span className="yellow-text">соавтором</span> платформы "Дай пять"?</h1>
                <span>
                    Для того чтобы стать соавтором, вам необходимо иметь опыт и знания в области дошкольного образования, а также быть готовым делиться своими знаниями и опытом. 
                    Ваша целеустремленность, профессионализм и умение обучать будут ключевыми качествами для успешного рейтинга на платформе.
                    Наша платформа онлайн-образования всегда открыта к новым идеям для создания уникального контента.
                </span>
            </div>
            <div className="teacher-container">
                <img className="man" src={imgMan} alt="man" />
                <div className="list">
                    <div className="list_item">
                        <img className="check" src={imgMark} alt="check-mark" />
                        <span>Зарегистрируйтесь на сайте как преподаватель</span>
                    </div>
                    <div className="list_item">
                        <img className="check" src={imgMark} alt="check-mark" />
                        <span>Предоставьте необходимые данные и дождитесь подтверждения</span>
                    </div>
                    <div className="list_item">
                        <img className="check" src={imgMark} alt="check-mark" />
                        <span>Создавайте собственные уроки и тесты</span>
                    </div>
                    <div className="list_item">
                        <img className="check" src={imgMark} alt="check-mark" />
                        <span>Находите учеников</span>
                    </div>
                </div>
                <div className="author">
                    <button className="btn-author" onClick={openPopupT}>
                        Стать соавтором
                    </button>
                    <img className="man2" src={imgMan2} alt="man2" />
                </div>
            </div>
            <div>
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
            </div>
        </section>
    )
}

export default Teacher;