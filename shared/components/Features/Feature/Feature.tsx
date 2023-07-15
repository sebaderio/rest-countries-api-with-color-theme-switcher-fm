import styles from "./Feature.module.scss";

interface FeatureProps {
    name: string;
    value: string;
}

const Feature = ({ name, value }: FeatureProps) => {
    return (
        <div className={styles.feature}>
            <div className={styles.feature__name}>{name}:&nbsp;</div>
            <div className={styles.feature__value}>{value}</div>
        </div>
    );
};

export default Feature;
