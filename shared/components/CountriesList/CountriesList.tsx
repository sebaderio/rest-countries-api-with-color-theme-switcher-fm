import Country from "@/shared/components/CountriesList/Country";

import styles from "./CountriesList.module.scss";

interface CountriesListProps {
    countries: Country[];
}

function CountriesList({ countries }: CountriesListProps) {
    return (
        <div className={styles.countries_list}>
            {countries.map((country, index) => (
                <Country key={index} country={country} />
            ))}
        </div>
    );
}

export default CountriesList;
