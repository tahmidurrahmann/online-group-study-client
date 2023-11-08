import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

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
            <motion.div initial={{ y: 150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "1" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    features.map((feature, index) => <FeatureCard key={index} feature={feature}></FeatureCard>)
                }
            </motion.div>
            
        </div>
    );
};

export default Feature;