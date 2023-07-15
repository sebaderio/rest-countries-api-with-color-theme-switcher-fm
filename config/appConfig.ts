const appConfig = {
    apiUrl: `https://${
        process.env.NEXT_PUBLIC_VERCEL_URL
            ? process.env.NEXT_PUBLIC_VERCEL_URL
            : "0.0.0.0:3000"
    }/api`,
    cors: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    },
    defaults: {
        altImageText: "Country flag",
        altText: "Undefined",
    },
    landingPage: {
        filter: {
            options: [
                "Filter By Region",
                "Africa",
                "Americas",
                "Asia",
                "Europe",
                "Oceania",
            ],
            default: "Filter By Region",
        },
        search: {
            initValue: "",
            placeholder: "Search for country...",
        },
    },
};

export default appConfig;
