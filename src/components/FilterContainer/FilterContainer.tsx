import styles from "./FilterContainer.module.css";
import Dropdown from "../Dropdown/Dropdown.tsx";

const genres = ['Не выбран', 'Комедия', 'Драма', 'Боевик', 'Триллер', 'Ужасы', 'Семейный', 'Анимированный', 'Фэнтези', 'Романтика', 'Приключения', 'Мьюзикл', 'Военный'];
const years = ['Не выбран', '2009', '2008', '2007', '2006', '1990-2005', '1950-1989'];

const FilterContainer = () => {

    return (
        <section className={styles.filterContainer}>
            <h2 className={styles.header}>Фильтр</h2>
            <p className={styles.subHeader}>Жанр</p>
            <Dropdown items={genres} header={'Выберите жанр'} />
            <p className={styles.subHeader}>Год выпуска</p>
            <Dropdown items={years} header={'Выберите год'}/>
        </section>
    );
};

export default FilterContainer;
