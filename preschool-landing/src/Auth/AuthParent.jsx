import axios from 'axios'
import React, { useState } from 'react'
import env from 'react-dotenv'
import imgDad from '../assets/img/auth/dad.png'
import imgMom from '../assets/img/auth/mom.png'
import './AuthParent.css'

function AuthParent() {
	const [formData, setFormData] = useState({
		fullName: '',
		birthDate: '',
		gender: '',
		email: '',
		password: '',
	})

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async () => {
		setIsLoading(true)
		setError(null)

		try {
			const { data } = await axios.post(
				`${env.BACKEND_URL}/auth_parent/register`,
				{
					fullName: formData.fullName,
					email: formData.email,
					gender: formData.gender,
					password: formData.password,
					dateBirth: formData.birthDate,
				}
			)

			console.log(data)

			// Проверяем успешность регистрации
			if (data?.token) {
				window.location.href = 'https://deploy-panel-for-learn.vercel.app/login'
			} else {
				setError(data.message || 'Ошибка регистрации')
			}
		} catch (error) {
			console.log(error)
			setError('Произошла ошибка. Попробуйте еще раз.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section className='auth_parent'>
			<div className='auth_item'>
				<img src={imgDad} alt='dad' />
			</div>

			<div className='auth_item'>
				<div className='input-item'>
					<span>ФИО родителя</span>
					<input
						type='text'
						name='fullName'
						placeholder='Иванов Иван Иванович'
						value={formData.fullName}
						onChange={handleChange}
					/>
				</div>

				<div className='input-item'>
					<span>Дата рождения</span>
					<input
						type='date'
						name='birthDate'
						value={formData.birthDate}
						onChange={handleChange}
					/>
				</div>

				<div className='input-item'>
					<span>Пол</span>
					<div className='wrapper_radio'>
						<label>
							<span>мужской</span>
							<input
								className='radio'
								type='radio'
								name='gender'
								value='true'
								onChange={handleChange}
							/>
						</label>
						<label>
							<span>женский</span>
							<input
								className='radio'
								type='radio'
								name='gender'
								value='false'
								onChange={handleChange}
							/>
						</label>
					</div>
				</div>

				<div className='input-item'>
					<span>Электронная почта</span>
					<input
						type='text'
						name='email'
						placeholder='example@email.com'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className='input-item'>
					<span>Пароль</span>
					<input
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>

				{/* Условное отображение содержимого на основе состояния isLoading */}
				{isLoading ? (
					<div>Загрузка...</div>
				) : (
					<>
						<button onClick={handleSubmit}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
						{error && <div className='error-popup'>{error}</div>}
					</>
				)}
			</div>

			<div className='auth_item'>
				<img src={imgMom} alt='mom' />
			</div>
		</section>
	)
}

export default AuthParent
