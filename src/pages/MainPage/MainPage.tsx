import styles from "./MainPage.module.css";
import FilterContainer from "../../components/FilterContainer/FilterContainer.tsx";
import MainContainer from "../../components/MainContainer/MainContainer.tsx";

const MainPage = () => {
  return (
      <main className={styles.main__page}>
          <FilterContainer/>
          <MainContainer/>
      </main>)
};

export default MainPage;
