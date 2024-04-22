import React from "react";
import './AuthPreschooler.css';

import imgBoy from '../assets/img/auth/boy.png';
import imgGirl from '../assets/img/auth/girl.png';

function AuthPreschooler() {

    return (
        <section className="auth_preschooler">
            <div className="auth_item">
                <img src={imgBoy} alt="dad" />
            </div>

            <div className="auth_item">
                <div className="input-item">
                    <span>ФИО ученика</span>
                    <input type="text" placeholder="Иванов Иван Иванович" />
                </div>

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
                    <input type="text" placeholder="example@email.com"/>
                </div>

                <div className="input-item">
                    <span>Пароль</span>
                    <input type="password" />
                </div>

                <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>

            <div className="auth_item">
                <img src={imgGirl} alt="mom" />
            </div>

        </section>
    )
}

export default AuthPreschooler;

