import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { faMoon as faMoonOutline } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ThemeSwitch.module.scss";

function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const switchTheme = () => {
        theme == "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <button className={styles.theme_switch} onClick={switchTheme}>
            <div className={styles.theme_switch__icon}>
                {theme == "light" ? (
                    <FontAwesomeIcon icon={faMoonOutline} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </div>
            <div className={styles.theme_switch__text}>Dark Mode</div>
        </button>
    );
}

export default ThemeSwitch;
