const FeatureCard = ({ feature }) => {
    const {description, imageURL, topic} = feature;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={imageURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{topic}</h2>
                <p className="text-[#1C1B1B99] text-lg font-medium">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;