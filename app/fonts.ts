import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    variable: "--FONT-NUNITO-SANS",
    weight: ["300", "600", "800"],
});

export default nunitoSans;
