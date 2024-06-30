import React, {useState} from 'react';
import styles from "./ModalLogin.module.css";
import {ReactComponent as CloseIcon} from "../../assets/icons/close-modal.svg";
import Button from "../Button/Button.tsx";

type TModalLoginProps = {
    onClick: () => void;
};
const ModalLogin = ({onClick}: TModalLoginProps) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Обработка логики входа
        console.log('Вход выполнен');
    };

    return (
        <div className={styles.modalLogin}>
            <div className={styles.head__container}>
                <h2 className={styles.head__name}>Авторизация</h2>
                <button onClick={onClick} className={styles.btn__close}>
                    <CloseIcon/>
                </button>
            </div>
            <form className={styles.form} onSubmit={handleLogin}>
                <label>
                    <p className={styles.label__name}>Логин <span style={{color: '#F04075'}}>*</span></p>
                    <input
                        className={styles.input}
                        type="text"
                        name='Login'
                        value={login}
                        onChange={handleLoginChange}
                        placeholder='Введите логин'/>
                </label>
                <label>
                    <p className={styles.label__name}>Пароль <span style={{color: '#F04075'}}>*</span></p>
                    <input
                        className={styles.input}
                        type="password"
                        name='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Введите пароль'/>
                </label>
                <div className={styles.btns__container}>
                    <Button onClick={handleLogin} text='Войти' styleType='secondary'/>
                    <Button onClick={onClick} text='Отменить' styleType='inverted'/>
                </div>
            </form>
        </div>
    );
};


export default ModalLogin;
