import { Country, Region } from "@/shared/types/countries";

export abstract class CountriesRepository {
    abstract getAll(): Country[];

    abstract getByIso(isoName: string): Country | null;

    abstract getByName(name: string): Country | null;

    abstract findByName(name: string): Country[];

    abstract findByRegion(region: Region): Country[];

    abstract findByNameAndRegion(name: string, region: Region): Country[];
}
