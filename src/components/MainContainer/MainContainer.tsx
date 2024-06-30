import styles from "./MainContainer.module.css";
import SearchInput from "../SearchInput/SearchInput.tsx";
import FilmsContainer from "../FilmsContainer/FilmsContainer.tsx";
import Pagination from "../Pagination/Pagination.tsx";

const MainContainer = () => {

     return (
        <section className={styles.mainContainer}>
            <SearchInput/>
            <FilmsContainer/>
            <Pagination/>
        </section>
    );
};

export default MainContainer;