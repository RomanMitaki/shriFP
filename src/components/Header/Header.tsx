import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import {AppRoutes, RoutePath} from "../../utils/config/router";
import Button from "../Button/Button.tsx";


const Header = () => {

    return (
        <header className={styles.header}>
            <Link className={styles.link} to={RoutePath[AppRoutes.MAIN]}>
                <h1 className={styles.logo}>Фильмопоиск</h1>
            </Link>
            <Button text="Войти" styleType="primary"/>
        </header>
    );
};

export default Header;
