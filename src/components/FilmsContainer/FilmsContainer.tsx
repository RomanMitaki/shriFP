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
                <FilmCardMain
                    key={film.id}
                    title={film.title}
                    genre={film.genre}
                    releaseYear={film.release_year}
                    description={film.description}
                    image={film.poster}/>
            ))}
        </div>
    );
};

export default FilmsContainer;
