import styles from "./FilmCardMain.module.css";

type TFilmCardMainProps = {
    title: string;
    genre: string;
    releaseYear: string;
    description: string;
    image: string;
};
const FilmCardMain = ({title, genre, releaseYear, description, image}: TFilmCardMainProps) => {

    return (
        <div className={styles.card}>
            <img className={styles.img} src={image} alt="film image"/>
            <div className={styles.info}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.mainDescription__container}>
                    <div className={styles.description__container}>
                        <p className={styles.description__title}>Жанр</p>
                        <p className={styles.description__content}>{genre}</p>
                    </div>
                    <div className={styles.description__container}>
                        <p className={styles.description__title}>Год выпуска</p>
                        <p className={styles.description__content}>{releaseYear}</p>
                    </div>
                    <div className={styles.description__container}>
                        <p className={styles.description__title}>Описание</p>
                        <p className={styles.description__content}>{description}</p>
                    </div>
                </div>
            </div>
            <div className={styles.rating__wrapper}></div>
        </div>
    )
};


export default FilmCardMain;