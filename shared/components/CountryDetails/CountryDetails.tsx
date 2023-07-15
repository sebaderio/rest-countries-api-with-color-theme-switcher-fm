import Image from "next/image";
import { useRouter } from "next/navigation";

import { appConfig } from "@/config";
import Button from "@/shared/components/Button";
import Features from "@/shared/components/Features";
import { Country } from "@/shared/types/countries";

import {
    generateCountryAdditionalFeatures,
    generateCountryGeneralFeatures,
} from "./helpers";

import styles from "./CountryDetails.module.scss";

interface CountryDetailsProps {
    country: Country;
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
    const router = useRouter();

    const generateRedirectHandler = (countryIso: string) => {
        return () => router.push(`/countries/${countryIso}?iso=true`);
    };

    return (
        <div className={styles.country_details}>
            <div className={styles.country_details__icon_container}>
                <div className={styles.country_details__icon}>
                    <Image
                        fill
                        src={country.flags.png}
                        alt={appConfig.defaults.altImageText}
                        // Added only to supress the warning in the browser console
                        sizes="(max-width: 700px) 84vw, (min-width: 701px) 50vw"
                    />
                </div>
            </div>
            <div className={styles.country_details__content}>
                <div className={styles.country_details__name}>
                    {country.name}
                </div>
                <div className={styles.country_details__info}>
                    <div className={styles.country_details__general}>
                        <Features
                            features={generateCountryGeneralFeatures(country)}
                        />
                    </div>
                    <div className={styles.country_details__additional}>
                        <Features
                            features={generateCountryAdditionalFeatures(
                                country
                            )}
                        />
                    </div>
                </div>
                <div className={styles.country_details__border_countries}>
                    <div className={styles.country_details__title}>
                        Border Countries:&nbsp;
                    </div>
                    <div className={styles.country_details__countries}>
                        {country.borders
                            ? country.borders.map((countryIso, index) => (
                                  <Button
                                      key={index}
                                      onClick={generateRedirectHandler(
                                          countryIso
                                      )}
                                  >
                                      {countryIso}
                                  </Button>
                              ))
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
