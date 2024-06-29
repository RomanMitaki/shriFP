import styles from "./Dropdown.module.css";
import React, {useState, useEffect} from 'react';
import {ReactComponent as ArrowDown} from "../../assets/icons/arrow-square-down.svg";
import {ReactComponent as ArrowUp} from "../../assets/icons/arrow-square-up.svg";

type TDropdownProps = {
    items: string[];
    header: string;
};

const Dropdown: React.FC<TDropdownProps> = ({items, header}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setSelected(selected || header);
    }, [selected]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleFilmSelect = (film: string) => {
        setSelected(film);
        setIsOpen(false);
    };

    return (
        <div className={styles.dropdown}>
            <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
                <p className={styles.header}>{selected || header}</p>
                <button className={styles.btn} onClick={toggleDropdown}>
                    {isOpen ? <ArrowUp/> : <ArrowDown/>}
                </button>
            </div>
            {isOpen && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <li className={styles.list__item} key={item} onClick={() => handleFilmSelect(item)}>
                            <button className={styles.list__btn}>{item}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default Dropdown;