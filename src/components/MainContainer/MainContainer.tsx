import styles from "./MainContainer.module.css";
import SearchInput from "../SearchInput/SearchInput.tsx";


const MainContainer = () => {

    return (
        <section className={styles.mainContainer}>
            <SearchInput/>
        </section>
    );
};

export default MainContainer;