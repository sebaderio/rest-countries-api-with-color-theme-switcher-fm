import nunitoSans from "./fonts";
import Providers from "./providers";

import "./globals.scss";

export const metadata = {
    title: "REST Countries",
    description:
        "Full-stack, NextJS solution to the REST Countries API with color theme switcher challenge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={nunitoSans.variable} suppressHydrationWarning>
            <head />
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
