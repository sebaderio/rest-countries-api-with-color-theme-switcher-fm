"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { appConfig } from "@/config";
import BackButton from "@/shared/components/BackButton";
import CountryDetails from "@/shared/components/CountryDetails";
import TopBar from "@/shared/components/TopBar";
import { Country } from "@/shared/types/countries";

interface PageProps {
    params: { country: string };
}

const Page = ({ params: { country } }: PageProps) => {
    const [countryData, setCountryData] = useState<Country | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const isIsoSearch = searchParams.get("iso") === "true";

    useEffect(() => {
        const url = `${appConfig.apiUrl}/countries/${decodeURI(country)}?iso=${
            isIsoSearch ? "true" : "false"
        }`;
        fetch(url)
            .then((res) => {
                if (res.status != 200) {
                    throw new Error();
                }
                return res.json();
            })
            .then((data: Country) => {
                setCountryData(data);
            })
            .catch(() => {
                router.push("/404");
            });
    }, [country, isIsoSearch, router]);

    const redirectToLandingPage = () => router.push("/");

    return (
        <div>
            <TopBar />
            <div>
                <BackButton onClick={redirectToLandingPage} />
            </div>
            {countryData ? <CountryDetails country={countryData} /> : null}
        </div>
    );
};

export default Page;
