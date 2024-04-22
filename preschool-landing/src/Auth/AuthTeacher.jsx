import React from "react";
import './AuthTeacher.css';

import imgTeacher from '../assets/img/auth/teacher3.png';
import imgTeacher2 from '../assets/img/auth/teacher2.png';

function AuthTeacher() {

    return (
        <section className="auth_teacher">
            <div className="auth_item">
                <img src={imgTeacher2} alt="teacher2" />
            </div>

            <div className="auth_item">
                <div className="input-item">
                    <span>ФИО преподавателя</span>
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
                <img src={imgTeacher} alt="teacher" />
            </div>
        </section>
    )
}

export default AuthTeacher;