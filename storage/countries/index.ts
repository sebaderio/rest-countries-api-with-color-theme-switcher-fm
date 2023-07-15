import { Country } from "@/shared/types/countries";
import rawCountries from "@/storage/countries/json/countries.json";
import { JSONCountriesRepository as CountriesRepository } from "@/storage/countries/json/repository";

const Countries = new CountriesRepository(rawCountries as Country[]);

export { Countries };
