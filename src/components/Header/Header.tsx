import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {AppRoutes, RoutePath} from "../../utils/config/router";
import Button from "../Button/Button.tsx";
import Modal from "../Modal/Modal.tsx";
import {useState} from "react";
import ModalLogin from "../ModalLogin/ModalLogin.tsx";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <Link className={styles.link} to={RoutePath[AppRoutes.MAIN]}>
                    <h1 className={styles.logo}>Фильмопоиск</h1>
                </Link>
                <Button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                    text="Войти"
                    styleType="primary"/>
            </header>
            <Modal isOpen={isOpen}
                   onClose={() => {
                       setIsOpen(false);
                   }}>
                <ModalLogin onClick={() => {
                    setIsOpen(false);
                }}/>
            </Modal>
        </>

    );
};

export default Header;
