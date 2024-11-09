/* import React, {useState} from "react";
import './LoginPopup.css'
import {assets} from "../../assets/assets.js";

const LoginPopup = ({setShowLogin}) => { // ДОБАВЛЯЕМ ФУНКЦИЮ КОТОРАЯ ПОКАЗЫВАЕТ БЛАНКУ ЕСЛИ ЧТО ТО НЕ ТАК ТО НЕ ПОКАЗЫВАЕТ СОЗДАЛИ aPP

    const [currState, setCurrState] = useState('Login') Создаем Функции которые выводят сначада логин на появл бланкете

    return (

        <div className='login-popup' >
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false) } src={assets.cross_icon} alt=""/> СОЗДАЕМ КРЕСТИК КОТОРЫЙ ДЕЛАЕТ ФУНКЦИЮ НЕДЕЙСТВ ТО ЕСТЬ ВЫХОДИТ ИЛИ ДЕЛАЕТ НАЗАЛ
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>} ЕСЛИ РАВНО ЛОГИН ТО ПУСТАЯ СТРОКА ЕСЛИ РЕГСТРАЦИЯ ТО ВОТ СЛЕДУЩАЯ

                    <input type="email" placeholder='Email' required/> <br/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button>{currState==='Sign Up'?'Create account':'Login'}</button> В ЗАВИСИМОСТИ БУДЕТ ПОКАЗЫВАТЬСЯ ТЕКСТ
                <div className="login-popup-condition">
                    <input type="checkbox" required/> ГАЛОЧКА ВЕРИФ
                    <p>Lorem ipsum dolor sit & amet, consectetur & adipisicing elit. Aut, culpa.</p> УСЛОВИЯ
                </div>
                {currState === 'Login' ? <p>Create new Account || <span onClick={ () =>setCurrState('Sign Up')}>click here</span></p> :   ЕСЛИ РАВНО ЛОГИ СОЗДАТЬ ТО ЗАПРАШИВАЕТ
                  СОЗДАТЬ НОВЫЙ АККАУНТ ЕСЛИ РЕГИСТРАЦИЯ ТО ВОЙТИ И ПО КЛИКАМ ТЕКСТА ВЕРЕВОДИТСЯ В ЛОГИН ИЛИ РЕГИСТРАЦИИ
                    <p>Already Have an account? || <span onClick={() =>setCurrState('Login')}>Login here</span></p>}

            </form>


        </div>
    )
}*/

import React, {useState} from "react";
import './LoginPopup.css'
import {assets} from "../../assets/assets.js";

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState('Login')

    return (

        <div className='login-popup' >
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false) } src={assets.cross_icon} alt=""/>
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>}

                    <input type="email" placeholder='Email' required/> <br/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button>{currState==='Sign Up'?'Create account':'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>Lorem ipsum dolor sit & amet, consectetur & adipisicing elit. Aut, culpa.</p>
                </div>
                {currState === 'Login' ? <p>Create new Account || <span onClick={ () =>setCurrState('Sign Up')}>click here</span></p> :
                    <p>Already Have an account? || <span onClick={() =>setCurrState('Login')}>Login here</span></p>}

            </form>


        </div>
    )
}

export default LoginPopup