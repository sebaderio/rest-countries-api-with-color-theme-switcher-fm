import { MouseEventHandler } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
