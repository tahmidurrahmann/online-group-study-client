import { useLoaderData } from "react-router-dom";
import MyAssignments from "./MyAssignments";
import { useState } from "react";

const MyAssignment = () => {

    const myAssignments = useLoaderData();

    const [remainingAssignment, setRemainingAssignment] = useState(myAssignments);

    return (
        <div className="overflow-x-auto min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-200">
            <table className="table">
                <thead>
                    <tr>
                        <th>Assignment</th>
                        <th>Examinee Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        remainingAssignment?.map((assignment, index) => <MyAssignments assignment={assignment} remainingAssignment={remainingAssignment} setRemainingAssignment={setRemainingAssignment} key={index}></MyAssignments>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAssignment;