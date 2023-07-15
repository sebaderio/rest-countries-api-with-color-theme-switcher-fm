import Filters from "@/shared/components/SearchBar/Filters";
import SearchBox from "@/shared/components/SearchBar/SearchBox";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
    initFilterOption: string;
    filterHandler: (selectedOption: string) => void;
    filterOptions: string[];
    initSearchTerm: string;
    placeholderText: string;
    searchHandler: (searchTerm: string) => void;
}

const SearchBar = ({
    initFilterOption,
    filterHandler,
    filterOptions,
    initSearchTerm,
    placeholderText,
    searchHandler,
}: SearchBarProps) => {
    return (
        <div className={styles.search_bar}>
            <div className={styles.search_bar__search}>
                <SearchBox
                    initSearchTerm={initSearchTerm}
                    placeholderText={placeholderText}
                    searchHandler={searchHandler}
                />
            </div>
            <div className={styles.search_bar__filters}>
                <Filters
                    initOption={initFilterOption}
                    onSelect={filterHandler}
                    options={filterOptions}
                />
            </div>
        </div>
    );
};

export default SearchBar;
