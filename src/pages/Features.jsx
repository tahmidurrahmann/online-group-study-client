import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
const Feature = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    console.log(features);
    return (
        <div className="container mx-auto my-10 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    features.map((feature, index) => <FeatureCard key={index} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;