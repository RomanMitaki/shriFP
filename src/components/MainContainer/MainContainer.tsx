import styles from "./MainContainer.module.css";
import SearchInput from "../SearchInput/SearchInput.tsx";
import FilmsContainer from "../FilmsContainer/FilmsContainer.tsx";


const MainContainer = () => {

    return (
        <section className={styles.mainContainer}>
            <SearchInput/>
            <FilmsContainer/>
        </section>
    );
};

export default MainContainer;