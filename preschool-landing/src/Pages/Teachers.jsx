import React from "react";
import './Teachers.css';
import imgMan from '../assets/img/man.png';
import imgMan2 from '../assets/img/man2.png';
import imgMark from '../assets/icons/mark_check.svg';

function Teacher() {
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