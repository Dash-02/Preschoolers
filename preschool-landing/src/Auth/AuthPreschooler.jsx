import React, { useState } from "react";
import './AuthPreschooler.css';
import axios from "axios";
import env from 'react-dotenv';

import imgBoy from '../assets/img/auth/boy.png';
import imgGirl from '../assets/img/auth/girl.png';

function AuthPreschooler() {
        const [formData, setFormData] = useState({
            fullName: '',
            fullNameParents: '',
            birthDate: '',
            gender: '',
            email: '',
            password: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    
        const handleSubmit = () => {
           
            const AddParentInServer = async (formData) => {
                try {
                    const {data} = await axios.post(`${env.BACKEND_URL}/auth_parent/register`, {
                        fullName: formData.fullName,
                        fullNameParent: formData.fullNameParent,
                        email: formData.email,
                        gender: formData.gender,
                        password: formData.password,
                        dateBirth: formData.birthDate
                    })
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
            AddParentInServer(formData)
        };
    return (
        <section className="auth_preschooler">
            <div className="auth_item">
                <img src={imgBoy} alt="boy" />
            </div>

            <div className="auth_item">
                <div className="input-item">
                    <span>ФИО ученика</span>
                    <input 
                        type="text"
                        name="fullName"
                        placeholder="Иванов Иван Иванович"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-item">
                    <span>ФИО родителя</span>
                    <input 
                        type="text"
                        name="fullNameParent"
                        placeholder="Иванов Иван Иванович" 
                        value={formData.fullNameParent}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-item">
                    <span>Дата рождения</span>
                    <input 
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-item">
                    <span>Пол</span>
                    <div className="wrapper_radio">
                        <label>
                            <span>мужской</span>
                            <input 
                                className="radio" 
                                type="radio" 
                                name="gender"
                                value="true"
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <span>женский</span>
                            <input 
                                className="radio" 
                                type="radio" 
                                name="gender"
                                value="false"
                                onChange={handleChange} 
                            />
                        </label>
                    </div>
                </div>

                <div className="input-item">
                    <span>Электронная почта</span>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-item">
                    <span>Пароль</span>
                    <input 
                        type="password"
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={handleSubmit}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>

            <div className="auth_item">
                <img src={imgGirl} alt="girl" />
            </div>

        </section>
    )
}

export default AuthPreschooler;

