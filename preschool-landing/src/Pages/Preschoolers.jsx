import React from "react";
import './Preschoolers.css';
import imgSet from '../assets/img/settings.png';
import imgPhone from '../assets/img/phone.png';
import imgBooksPink from '../assets/img/books_pink.png';
import imgHand from '../assets/img/hand_pencils.png';
import imgDate from '../assets/img/date.png';
import imgOpenBook from '../assets/img/open_book.png';
import imgPapers from '../assets/img/papers.png';
import imgPencils from '../assets/img/pencils.png';
import imgArrow1 from '../assets/img/Arrow_1.png';
import imgArrow2 from '../assets/img/Arrow_2.png';
import imgArrow3 from '../assets/img/Arrow_3.png';
import mobArr1 from '../assets/img/mob_arr1.png';
import mobArr2 from '../assets/img/mob_arr2.png';
import mobArr3 from '../assets/img/mob_arr3.png';


function Preschooler() {
    return (
        <section id="preschoolers" className="preschooler">
            <div className="schema-wrapper">

            <div className="preschool-text">
                <h1>Чем будет заниматься <span className="yellow-text">ребенок</span> в "Дай пять"?</h1>
            </div>
            <div className="schema">
                <div className="schema_content">
                <div className="round-wrapper">
                    <div className="round">
                        <img className="img_p" src={imgSet} alt="develop" />
                        <span>Развитие мышления</span>
                    </div>
                    <div className="imgs">
                        <img className="mob_arrow" src={mobArr1} alt="mob_arrow1" />
                        <img className="img_p" src={imgPhone} alt="phone" />
                        <img className="img_arrow2" src={imgArrow2} alt="arr1" />
                    </div>
                </div>

                <div className="round-wrapper">
                    <div className="imgs">
                        <img className="img_p" src={imgBooksPink} alt="books_pink" />
                        <img className="img_arrow1" src={imgArrow1} alt="arr1" />
                        <img className="mob_arrow" src={mobArr2} alt="mob_arrow2" />
                    </div>
                    <div className="round">
                        <img className="img_pencil" src={imgHand} alt="hand_pencil" />
                        <span>Творческие навыки</span>
                    </div>
                </div>
                </div>
                    
                <div className="schema_content">
                <div className="round-wrapper">
                    <div className="round">
                        <img src={imgDate} alt="date" />
                        <span>Удобный график</span>
                    </div>
                    <div className="imgs">
                        <img className="img_arrow3" src={imgArrow3} alt="arr1" />
                        <img className="mob_arrow" src={mobArr3} alt="mob_arrow3" />
                        <img className="img_p" src={imgOpenBook} alt="open_book" />
                    </div>
                </div>

                <div className="round-wrapper">
                    <div className="imgs">
                        <img className="img_p" src={imgPencils} alt="pencils" />
                    </div>
                    <div className="round">
                        <img className="img_pencil" src={imgPapers} alt="papers" />
                        <span>Успешное обучение</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Preschooler;