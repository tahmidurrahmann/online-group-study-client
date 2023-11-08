import MyAssignments from "./MyAssignments";
import { useEffect, useState } from "react";

const MyAssignment = () => {

    const [remainingAssignment, setRemainingAssignment] = useState();

    useEffect(()=>{
        fetch(`https://online-group-study-server-blush.vercel.app/take-assignment`,{credentials : "include"})
        .then(res => res.json())
        .then(data => setRemainingAssignment(data))
    },[])

    

    return (
        <div className="overflow-x-auto min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-200">
            <table className="table">
                <thead>
                    <tr className="text-base">
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