import { useLoaderData } from "react-router-dom";
import AllAssignment from "./AllAssignment";
import { useState } from "react";

const AllAssignments = () => {

    const submittedData = useLoaderData();

    const [assignmentData, setAssignmentData] = useState(submittedData);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 container mx-auto">
                {
                    assignmentData?.map((assignment, index) => <AllAssignment key={index} assignment={assignment} assignmentData={assignmentData} setAssignmentData={setAssignmentData}></AllAssignment>)
                }
            </div>
        </div>
    );
};

export default AllAssignments;