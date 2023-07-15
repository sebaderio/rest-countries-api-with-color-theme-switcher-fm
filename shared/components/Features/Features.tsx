import Feature from "@/shared/components/Features/Feature";
import { CountryFeature } from "@/shared/types/countries";

interface FeaturesProps {
    features: CountryFeature[];
}

const Features = ({ features }: FeaturesProps) => {
    return (
        <div>
            {features.map((feature, index) => (
                <Feature
                    key={index}
                    name={feature.name}
                    value={feature.value}
                />
            ))}
        </div>
    );
};

export default Features;
