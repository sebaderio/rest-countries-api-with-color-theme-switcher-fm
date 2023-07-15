import Image from "next/image";
import { useRouter } from "next/navigation";

import { appConfig } from "@/config";
import Features from "@/shared/components/Features";
import { Country } from "@/shared/types/countries";

import { generateCountryFeatures } from "./helpers";

import styles from "./Country.module.scss";

interface CountryProps {
    country: Country;
}

const Country = ({ country }: CountryProps) => {
    const router = useRouter();

    return (
        <div
            className={styles.country}
            onClick={() => router.push(`/countries/${country.name}`)}
        >
            <div className={styles.country__image}>
                <Image
                    width={260}
                    height={160}
                    src={country.flags.png}
                    alt={appConfig.defaults.altImageText}
                />
            </div>
            <div className={styles.country__content}>
                <div className={styles.country__title}>{country.name}</div>
                <Features features={generateCountryFeatures(country)} />
            </div>
        </div>
    );
};

export default Country;
