import { Country, Region } from "@/shared/types/countries";
import { CountriesRepository } from "@/storage/countries/repository";

export class JSONCountriesRepository extends CountriesRepository {
    private countries: Country[];

    constructor(countries: Country[]) {
        super();
        this.countries = countries;
    }

    getAll(): Country[] {
        return this.countries;
    }

    getByIso(isoName: string): Country | null {
        return (
            this.countries.find(
                (country) =>
                    country.alpha3Code.toLowerCase() === isoName.toLowerCase()
            ) || null
        );
    }

    getByName(name: string): Country | null {
        return (
            this.countries.find(
                (country) => country.name.toLowerCase() === name.toLowerCase()
            ) || null
        );
    }

    findByName(name: string): Country[] {
        return this.countries.filter((country) =>
            country.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    findByRegion(region: Region): Country[] {
        return this.countries.filter(
            (country) => country.region.toLowerCase() === region.toLowerCase()
        );
    }

    findByNameAndRegion(name: string, region: Region): Country[] {
        const withMatchingName = this.findByName(name);
        return withMatchingName.filter(
            (country) => country.region.toLowerCase() == region.toLowerCase()
        );
    }
}
