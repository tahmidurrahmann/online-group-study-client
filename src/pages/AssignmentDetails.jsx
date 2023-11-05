import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
    const details = useLoaderData();
    const { date, description, difficult, mark, photo, title } = details;
    return (
        <div className="bg-gradient-to-r from-white to-gray-400 py-20 w-full mx-auto">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 flex items-center">
                        <img className="w-3/4 mx-auto" src={photo} alt="" />
                    </div>
                    <div className="flex items-center px-10 lg:px-0">
                        <div className="space-y-6 md:space-y-12 text-center md:text-left">
                            <h2 className="text-xl font-semibold my-6">{date}</h2>
                            <h2 className="text-3xl font-bold">{title}</h2>
                            <h2 className="text-xl font-bold">{mark} Marks</h2>
                            <p className="text-gray-500">{description}</p>
                            <p className="text-xl font-semibold">{difficult} Level</p>
                            <div className="flex gap-3 md:justify-start md:items-start justify-center items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;