import React from "react";
import './AuthParent.css';
import imgMom from '../assets/img/auth/mom.png';
import imgDad from '../assets/img/auth/dad.png';

function AuthParent() {

    return (
        <section className="auth_parent">
            <div className="auth_item">
                <img src={imgDad} alt="dad" />
            </div>

            <div className="auth_item">
                <div className="input-item">
                    <span>ФИО родителя</span>
                    <input type="text" placeholder="Иванов Иван Иванович" />
                </div>

                <div className="input-item">
                    <span>Дата рождения</span>
                    <input type="date" />
                </div>

                <div className="input-item">
                    <span>Пол</span>
                    <div className="wrapper_radio">
                        <label>
                            <span>мужской</span>
                            <input className="radio" type="radio" name="gender" />
                        </label>
                        <label>
                            <span>женский</span>
                            <input className="radio" type="radio" name="gender" />
                        </label>
                    </div>
                </div>

                <div className="input-item">
                    <span>Электронная почта</span>
                    <input type="text" placeholder="example@email.com" />
                </div>

                <div className="input-item">
                    <span>Пароль</span>
                    <input type="password" />
                </div>

                <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>

            <div className="auth_item">
                <img src={imgMom} alt="mom" />
            </div>
        </section>
    )
}

export default AuthParent;