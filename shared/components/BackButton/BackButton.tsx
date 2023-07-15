import { MouseEventHandler } from "react";

import Button from "@/shared/components/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./BackButton.module.scss";

interface BackButtonProps {
    onClick: MouseEventHandler<HTMLDivElement>;
}

const BackButton = ({ onClick }: BackButtonProps) => {
    return (
        <div className={styles.back_button}>
            <Button onClick={onClick}>
                <div className={styles.back_button__content}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <div>Back</div>
                </div>
            </Button>
        </div>
    );
};

export default BackButton;
