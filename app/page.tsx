"use client";
import { useEffect, useState } from "react";

import { appConfig } from "@/config";
import CountriesList from "@/shared/components/CountriesList";
import SearchBar from "@/shared/components/SearchBar";
import TopBar from "@/shared/components/TopBar";
import { Country } from "@/shared/types/countries";

const generateUrl = (searchTerm: string, searchFilter: string): URL => {
    const url = new URL(`${appConfig.apiUrl}/countries`);

    if (searchTerm != "") {
        url.searchParams.append("name", searchTerm.toLowerCase());
    }
    if (searchFilter != appConfig.landingPage.filter.default) {
        url.searchParams.append("region", searchFilter.toLowerCase());
    }

    return url;
};

const Page = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(
        appConfig.landingPage.search.initValue
    );
    const [searchFilter, setSearchFilter] = useState<string>(
        appConfig.landingPage.filter.default
    );

    const filterHandler = (selectedOption: string) =>
        setSearchFilter(selectedOption);

    const searchHandler = (searchTerm: string) => setSearchTerm(searchTerm);

    useEffect(() => {
        const url = generateUrl(searchTerm, searchFilter);
        fetch(url)
            .then((res) => {
                if (res.status != 200) {
                    throw new Error(
                        `Request failed! Status code: ${res.status}`
                    );
                }
                return res.json();
            })
            .then((countries: Country[]) => {
                countries.sort(() => Math.random() - 0.5);
                setCountries(countries);
            })
            .catch((err) => alert(err.message));
    }, [searchTerm, searchFilter]);

    return (
        <div>
            <TopBar />
            <SearchBar
                filterHandler={filterHandler}
                filterOptions={appConfig.landingPage.filter.options}
                initFilterOption={searchFilter}
                initSearchTerm={searchTerm}
                placeholderText={appConfig.landingPage.search.placeholder}
                searchHandler={searchHandler}
            />
            <CountriesList countries={countries} />
        </div>
    );
};

export default Page;
