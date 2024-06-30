import React, {useState, useEffect} from "react";
import styles from "./SearchInput.module.css";
import {ReactComponent as ZoomIcon} from "../../assets/icons/search-zoom.svg";
import {ReactComponent as ClearIcon} from "../../assets/icons/search-clear.svg";
import {renderFilms} from "../../services/actions/films.ts";
import {useAppDispatch} from "../../services/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../services/hooks/useAppSelector.ts";
import {resetPage, setSearchTerm} from "../../services/slices/filmsSlice.ts";


const SearchInput: React.FC = () => {
    const {params} = useAppSelector((store) => store.films);
    const [showClearButton, setShowClearButton] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let debounceTimeout: number;

        const handleDebounce = () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                dispatch(renderFilms({...params, release_year: undefined, genre: undefined, page: 1}));
                dispatch(resetPage())
            }, 1000);
        };

        handleDebounce();

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [params.title, dispatch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        dispatch(setSearchTerm(value));
    };

    const handleFocus = () => {
        setShowClearButton(true);
    };

    const handleBlur = () => {
        setTimeout(() => {setShowClearButton(false)}, 200)
    };

    const handleClear = () => {
        dispatch(setSearchTerm(''));
    };

    return (
        <div className={styles.searchInput}>
            <div className={styles.zoomIcon}>
                <ZoomIcon/>
            </div>
            <input
                type="text"
                placeholder="Название фильма"
                value={params.title}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.input}
            />
            {showClearButton && (
                <button className={styles.btn__clear} onClick={handleClear}>
                    <ClearIcon/>
                </button>
            )}
        </div>
    );
};

export default SearchInput;