import React, { useState } from "react";
import './Auth.css';
import imgTeacher from '../assets/img/auth/teacher3.png';
import imgParents from '../assets/img/auth/parents1.png';
import imgX from '../assets/img/auth/x.svg';
import imgChild from '../assets/img/auth/auth_child2.png';

import AuthParent from '../Auth/AuthParent.jsx';
import AuthPreschooler from '../Auth/AuthPreschooler.jsx';
import AuthTeacher from '../Auth/AuthTeacher.jsx';

function Auth() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAuth, setSelectedAuth] = useState(null);

    const openPopupP = () => {
        setSelectedAuth('parent');
        setIsOpen(true);
        document.body.classList.add('no-scroll');
    };

    const openPopupT = () => {
        setSelectedAuth('teacher');
        setIsOpen(true);
        document.body.classList.add('no-scroll');
    };

    const openPopupU = () => {
        setSelectedAuth('preschooler');
        setIsOpen(true);
        document.body.classList.add('no-scroll');
    };

    const closePopup = () => {
        setIsOpen(false);
        setSelectedAuth(null);
        document.body.classList.remove('no-scroll');
    };

    const renderAuthComponent = () => {
        switch (selectedAuth) {
            case 'parent':
                return <AuthParent />;
            case 'teacher':
                return <AuthTeacher />;
            case 'preschooler':
                return <AuthPreschooler />;
            default:
                return null;
        }
    };

    return (
        <section className="auth">
            <h1>Зарегистрироваться</h1>
            <div className="img-people">
                <div className="people_wrapper">
                    <img src={imgTeacher} alt="teacher" />
                    <button onClick={openPopupT}>
                        Как преподаватель
                    </button>
                </div>
                <div className="people_wrapper">
                    <img src={imgParents} alt="parents" />
                    <button onClick={openPopupP}>
                        Как родитель
                    </button>
                </div>
                <div className="people_wrapper">
                    <img src={imgChild} alt="child" />
                    <button onClick={openPopupU}>
                        Как ученик
                    </button>
                </div>
            </div>
            {isOpen && (
                <div id="popup">
                    <button className="btn-x" onClick={closePopup}>
                        <img src={imgX} alt="x" />
                    </button>
                    {renderAuthComponent()}
                </div>
            )}
        </section>
    )
}

export default Auth;
