import { useLoaderData } from "react-router-dom";
import MyAssignments from "./MyAssignments";

const MyAssignment = () => {

    const myAssignments = useLoaderData();

    return (
        <div className="overflow-x-auto min-h-screen">
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
                        myAssignments.map((assignment, index) => <MyAssignments assignment={assignment} key={index}></MyAssignments>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAssignment;