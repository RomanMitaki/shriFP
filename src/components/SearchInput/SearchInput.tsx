import React, {useState, useEffect} from "react";
import styles from "./SearchInput.module.css";
import {ReactComponent as ZoomIcon} from "../../assets/icons/search-zoom.svg";
import {ReactComponent as ClearIcon} from "../../assets/icons/search-clear.svg";

const SearchInput: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [showClearButton, setShowClearButton] = useState<boolean>(false);


    useEffect(() => {
        let debounceTimeout: number;

        const handleDebounce = () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {

                console.log("Отправка запроса на сервер:", searchTerm);
            }, 2000);
        };

        handleDebounce();

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [searchTerm]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchTerm(value);
    };

    const handleFocus = () => {
        setShowClearButton(true);
    };

    const handleBlur = () => {
        setTimeout(() => {setShowClearButton(false)}, 200)

    };

    const handleClear = () => {
        setSearchTerm("");
    };

    return (
        <div className={styles.searchInput}>
            <div className={styles.zoomIcon}>
                <ZoomIcon/>
            </div>
            <input
                type="text"
                placeholder="Название фильма"
                value={searchTerm}
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