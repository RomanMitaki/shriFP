import styles from "./DpopdownSelect.module.css";
import React from "react";
import {renderFilms} from "../../services/actions/films.ts";
import {resetPage} from "../../services/slices/filmsSlice.ts";
import {useAppSelector} from "../../services/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../services/hooks/useAppDispatch.ts";

type TDropdownSelectProps = {
    item: string;
};

const genresDict = {
    "Комедия": 'comedy',
    "Драма": 'drama',
    "Боевик": 'action',
    "Триллер": 'thriller',
    "Ужасы": 'horror',
    "Семейный": 'family',
    "Анимированный": 'cartoon',
    "Фэнтези": 'fantasy',
    "Романтика": 'romance',
    "Приключения": 'adventure',
    "Мьюзикл": 'musical',
    "Военный": 'war',
}
const DropdownSelect = ({item}: TDropdownSelectProps) => {
    const {params} = useAppSelector((store) => store.films);
    const dispatch = useAppDispatch();

    const handleClickSelect = () => {
        if (item === 'Не выбран') {
            dispatch(renderFilms({...params, release_year: undefined, genre: undefined, page: 1}));
        } else if (genresDict[item]) {
            dispatch(renderFilms({...params, release_year: undefined, genre: genresDict[item], page: 1}));
        } else {
            dispatch(renderFilms({...params, genre: undefined, release_year: item, page: 1}));
        }
        dispatch(resetPage())
    };

    return (
        <button onClick={handleClickSelect} className={styles.list__btn}>{item}</button>
    );
};

export default DropdownSelect;