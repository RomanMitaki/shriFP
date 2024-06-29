import styles from "./MainContainer.module.css";


const MainContainer = () => {

    return (
        <section className={styles.mainContainer}>
            <h2>Фильтр</h2>
            <p>Жанр</p>
            <p>Год выпуска</p>
        </section>
    );
};

export default MainContainer;