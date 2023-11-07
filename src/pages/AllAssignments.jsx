import { useLoaderData } from "react-router-dom";
import AllAssignment from "./AllAssignment";
import { useEffect, useState } from "react";

const AllAssignments = () => {

    const submittedData = useLoaderData();

    
    const [assignmentData, setAssignmentData] = useState(submittedData);
    const [difficultLevel, setDifficultLevel] = useState("all");

    const handleDifficultLevel = (e) => {
        setDifficultLevel(e.target.value);
    }
console.log(difficultLevel);
    useEffect(() => {
        if(difficultLevel === "all"){
            setAssignmentData(submittedData);
        }
        else{
            const levels = submittedData.filter(level => level.difficult === difficultLevel);
            console.log(levels, difficultLevel);
            setAssignmentData(levels) 
        }
    }, [submittedData, difficultLevel])

    return (
        <div className="container mx-auto">
            <select className="w-1/5 mt-10 bg-gradient-to-r from-white to-gray-200 border p-2 rounded-lg" onChange={handleDifficultLevel} id="">
                <option value="all">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 container mx-auto">
                {
                    assignmentData?.map((assignment, index) => <AllAssignment key={index} assignment={assignment} assignmentData={assignmentData} setAssignmentData={setAssignmentData}></AllAssignment>)
                }
            </div>
        </div>
    );
};

export default AllAssignments;