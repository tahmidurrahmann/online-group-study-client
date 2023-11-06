import { useLoaderData } from "react-router-dom";
import MyAssignments from "./MyAssignments";

const MyAssignment = () => {

    const myAssignments = useLoaderData();
    console.log(myAssignments);

    return (
        <div className="overflow-x-auto">
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