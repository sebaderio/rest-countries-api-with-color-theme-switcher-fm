import { NextRequest, NextResponse } from "next/server";

import { appConfig } from "@/config";
import { Country } from "@/shared/types/countries";
import { Countries } from "@/storage/countries";

export async function GET(
    req: NextRequest,
    context: any
): Promise<NextResponse> {
    const name = context.params.name;
    const isIsoName = req.nextUrl.searchParams.get("iso") === "true";

    const country: Country | null = isIsoName
        ? Countries.getByIso(name)
        : Countries.getByName(name);
    if (country) {
        return NextResponse.json(country, {
            status: 200,
            headers: appConfig.cors.headers,
        });
    }
    return NextResponse.json(
        { error: "country does not exist" },
        {
            status: 404,
            headers: appConfig.cors.headers,
        }
    );
}
