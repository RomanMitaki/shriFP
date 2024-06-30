import styles from "./FilmsContainer.module.css";
import FilmCardMain from "../FilmCardMain/FilmCardMain.tsx";
import {useAppSelector} from "../../services/hooks/useAppSelector.ts";

const FilmsContainer = () => {
    const {films, isLoading} = useAppSelector((store) => store.films);

    if (isLoading) {
        return <div className={styles.filmsContainer}>Загрузка...</div>;
    }

    return (
        <div className={styles.filmsContainer}>
            {films.map((film) => (
                <button className={styles.btn} key={film.id}>
                    <FilmCardMain
                        title={film.title}
                        genre={film.genre}
                        releaseYear={film.release_year}
                        description={film.description}
                        image={film.poster}/>
                </button>

            ))}
        </div>
    );
};

export default FilmsContainer;
