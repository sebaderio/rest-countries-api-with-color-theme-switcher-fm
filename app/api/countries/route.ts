import { NextResponse } from "next/server";

import { appConfig } from "@/config";
import { Region } from "@/shared/types/countries";
import { Countries } from "@/storage/countries";

import { getQSParamFromURL } from "../helpers";

export async function GET(req: Request): Promise<NextResponse> {
    const name = getQSParamFromURL("name", req.url);
    const regionParam: string | null = getQSParamFromURL("region", req.url);
    let region: Region | null = null;
    if (regionParam) {
        const regionValues = Object.values(Region).map((region) =>
            region.toLowerCase()
        );
        region = regionParam as Region;
        if (!regionValues.includes(region)) {
            return NextResponse.json(
                {
                    error: `region query parameter must be one of ${regionValues}`,
                },
                {
                    status: 400,
                    headers: appConfig.cors.headers,
                }
            );
        }
    }

    let countries = [];
    if (name && region) {
        countries = Countries.findByNameAndRegion(name, region);
    } else if (name) {
        countries = Countries.findByName(name);
    } else if (region) {
        countries = Countries.findByRegion(region);
    } else {
        countries = Countries.getAll();
    }

    return NextResponse.json(countries, {
        status: 200,
        headers: appConfig.cors.headers,
    });
}
