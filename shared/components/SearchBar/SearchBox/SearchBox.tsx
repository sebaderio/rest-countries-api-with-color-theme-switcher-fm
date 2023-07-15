import { FormEvent, useState } from "react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SearchBox.module.scss";

interface SearchBoxProps {
    initSearchTerm: string;
    placeholderText: string;
    searchHandler: (searchTerm: string) => void;
}

const SearchBox = ({
    initSearchTerm,
    placeholderText,
    searchHandler,
}: SearchBoxProps) => {
    const [searchTerm, setSearchTerm] = useState(initSearchTerm);

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => searchHandler(searchTerm);

    const handleKeyDown = (event: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={styles.search_box}>
            <div className={styles.search_box__icon}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={handleSearch}
                />
            </div>
            <div className={styles.search_box__input}>
                <input
                    type="text"
                    placeholder={placeholderText}
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default SearchBox;
