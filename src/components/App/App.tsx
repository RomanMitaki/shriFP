import AppRouter from "../../utils/providers/AppRouter.tsx";
import Header from "../Header/Header.tsx";
import styles from "./App.module.css";

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className={styles.content}>
                <AppRouter/>
            </div>

        </div>
  )
}

export default App
