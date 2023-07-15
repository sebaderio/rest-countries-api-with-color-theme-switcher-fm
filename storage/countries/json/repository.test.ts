import { Country, Region } from "@/shared/types/countries";

import { JSONCountriesRepository } from "./repository";

describe("JSONCountriesRepository", () => {
    const canada: Country = {
        name: "Canada",
        topLevelDomain: [".ca"],
        alpha2Code: "CA",
        alpha3Code: "CAN",
        callingCodes: ["1"],
        subregion: "Northern America",
        region: Region.Americas,
        population: 38005238,
        demonym: "Canadian",
        timezones: [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:30",
        ],
        nativeName: "Canada",
        numericCode: "124",
        flags: {
            svg: "https://restcountries.com/data/can.svg",
            png: "https://restcountries.com/data/can.png",
        },
        languages: [
            {
                iso639_1: "en",
                iso639_2: "eng",
                name: "English",
                nativeName: "English",
            },
            {
                iso639_1: "fr",
                iso639_2: "fra",
                name: "French",
                nativeName: "français",
            },
        ],
        translations: {
            br: "Canadá",
            pt: "Canadá",
            nl: "Canada",
            hr: "Kanada",
            de: "Kanada",
            es: "Canadá",
            fr: "Canada",
            ja: "カナダ",
            it: "Canada",
            hu: "Kanada",
        },
        flag: "https://restcountries.com/data/can.png",
        independent: true,
    };
    const uk: Country = {
        name: "United Kingdom",
        topLevelDomain: [".uk"],
        alpha2Code: "GB",
        alpha3Code: "GBR",
        callingCodes: ["44"],
        subregion: "Northern Europe",
        region: Region.Europe,
        population: 67886004,
        demonym: "British",
        timezones: ["UTC-08:00", "UTC-05:00", "UTC", "UTC+01:00"],
        nativeName: "United Kingdom",
        numericCode: "826",
        flags: {
            svg: "https://restcountries.com/data/gbr.svg",
            png: "https://restcountries.com/data/gbr.png",
        },
        languages: [
            {
                iso639_1: "en",
                iso639_2: "eng",
                name: "English",
                nativeName: "English",
            },
        ],
        translations: {
            br: "Reino Unido",
            pt: "Reino Unido",
            nl: "Verenigd Koninkrijk",
            hr: "Ujedinjeno Kraljevstvo",
            de: "Vereinigtes Königreich",
            es: "Reino Unido",
            fr: "Royaume-Uni",
            ja: "イギリス",
            it: "Regno Unito",
            hu: "Egyesült Királyság",
        },
        flag: "https://restcountries.com/data/gbr.png",
        independent: true,
    };
    const usa: Country = {
        name: "United States of America",
        topLevelDomain: [".us"],
        alpha2Code: "US",
        alpha3Code: "USA",
        callingCodes: ["1"],
        subregion: "Northern America",
        region: Region.Americas,
        population: 331449281,
        demonym: "American",
        timezones: [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
        ],
        nativeName: "United States",
        numericCode: "840",
        flags: {
            svg: "https://restcountries.com/data/usa.svg",
            png: "https://restcountries.com/data/usa.png",
        },
        languages: [
            {
                iso639_1: "en",
                iso639_2: "eng",
                name: "English",
                nativeName: "English",
            },
        ],
        translations: {
            br: "Estados Unidos",
            pt: "Estados Unidos",
            nl: "Verenigde Staten",
            hr: "Sjedinjene Američke Države",
            de: "Vereinigte Staaten von Amerika",
            es: "Estados Unidos",
            fr: "États-Unis",
            ja: "アメリカ合衆国",
            it: "Stati Uniti D'America",
            hu: "Amerikai Egyesült Államok",
        },
        flag: "https://restcountries.com/data/usa.png",
        independent: true,
    };

    const countries: Country[] = [canada, uk, usa];

    const repository = new JSONCountriesRepository(countries);

    it("should return all countries", () => {
        const allCountries = repository.getAll();
        expect(allCountries).toEqual(countries);
    });

    it("should return a country by ISO name", () => {
        const unitedStates = repository.getByIso("USA");
        expect(unitedStates).toEqual(usa);

        const unitedKingdom = repository.getByIso("gBr");
        expect(unitedKingdom).toEqual(uk);

        const nonExistentCountry = repository.getByIso("BTC");
        expect(nonExistentCountry).toBeNull();
    });

    it("should return a country by name", () => {
        const unitedStates = repository.getByName("United States of America");
        expect(unitedStates).toEqual(usa);

        const unitedKingdom = repository.getByName("United Kingdom");
        expect(unitedKingdom).toEqual(uk);

        const nonExistentCountry = repository.getByName("United States");
        expect(nonExistentCountry).toBeNull();
    });

    it("should find countries by name", () => {
        const foundCountries = repository.findByName("Uni");
        expect(foundCountries).toEqual([uk, usa]);

        const noMatches = repository.findByName("Non-existent");
        expect(noMatches).toEqual([]);
    });

    it("should return countries by region", () => {
        const americasCountries = repository.findByRegion(Region.Americas);
        expect(americasCountries).toEqual([canada, usa]);

        const europeCountries = repository.findByRegion(Region.Europe);
        expect(europeCountries).toEqual([uk]);

        const africaCountries = repository.findByRegion(Region.Africa);
        expect(africaCountries).toEqual([]);
    });

    it("should return countries by name and region", () => {
        const usaAmericasCountries = repository.findByNameAndRegion(
            "United",
            Region.Americas
        );
        expect(usaAmericasCountries).toEqual([usa]);

        const unitedAfricaCountries = repository.findByNameAndRegion(
            "United",
            Region.Africa
        );
        expect(unitedAfricaCountries).toEqual([]);
    });
});
