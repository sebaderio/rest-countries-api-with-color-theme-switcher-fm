import { appConfig } from "@/config";
import { Country, CountryFeature } from "@/shared/types/countries";

const generateCountryGeneralFeatures = (country: Country): CountryFeature[] => {
    return [
        { name: "Native Name", value: country.nativeName },
        { name: "Population", value: country.population.toString() },
        { name: "Region", value: country.region },
        { name: "Sub Region", value: country.subregion },
        {
            name: "Capital",
            value: country.capital
                ? country.capital
                : appConfig.defaults.altText,
        },
    ];
};

const generateCommaSeparatedTopLevelDomains = (country: Country): string => {
    if (country.topLevelDomain.length != 0) {
        return country.topLevelDomain.join(", ");
    }

    return appConfig.defaults.altText;
};

const generateCommaSeparatedCurrencies = (country: Country): string => {
    if (country.currencies && country.currencies.length != 0) {
        const currencyNames = country.currencies.map(
            (currency) => currency.name
        );
        return currencyNames.join(", ");
    }

    return appConfig.defaults.altText;
};

const generatedCommaSeparatedLanguages = (country: Country): string => {
    if (country.languages.length != 0) {
        const languageNames = country.languages.map(
            (language) => language.name
        );
        return languageNames.join(", ");
    }

    return appConfig.defaults.altText;
};

const generateCountryAdditionalFeatures = (
    country: Country
): CountryFeature[] => {
    return [
        {
            name: "Top Level Domains",
            value: generateCommaSeparatedTopLevelDomains(country),
        },
        {
            name: "Currencies",
            value: generateCommaSeparatedCurrencies(country),
        },
        {
            name: "Languages",
            value: generatedCommaSeparatedLanguages(country),
        },
    ];
};

export { generateCountryAdditionalFeatures, generateCountryGeneralFeatures };
