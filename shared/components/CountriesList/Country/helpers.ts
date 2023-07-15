import { appConfig } from "@/config";
import { Country, CountryFeature } from "@/shared/types/countries";

const generateCountryFeatures = (country: Country): CountryFeature[] => {
    return [
        { name: "Population", value: country.population.toString() },
        { name: "Region", value: country.region },
        {
            name: "Capital",
            value: country.capital
                ? country.capital
                : appConfig.defaults.altText,
        },
    ];
};

export { generateCountryFeatures };
