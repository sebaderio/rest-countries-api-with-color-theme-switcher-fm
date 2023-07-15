import { useRouter } from "next/navigation";

import ThemeSwitch from "@/shared/components/TopBar/ThemeSwitch";

import styles from "./TopBar.module.scss";

function TopBar() {
    const router = useRouter();

    return (
        <div className={styles.topbar}>
            <div className={styles.topbar__content}>
                <div
                    className={styles.topbar__content__title}
                    onClick={() => router.push("/")}
                >
                    Where in the world?
                </div>
                <div className={styles.topbar__content__theme_switch}>
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    );
}

export default TopBar;
