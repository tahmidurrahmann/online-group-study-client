import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MineAssignment from "./MineAssignment";

const MineAssignments = () => {

    const { user } = useAuth();
    const userEmail = user.email;
    const [mineDatas, setMineDatas] = useState([]);

    const url = `http://localhost:5010/take-assignment?userEmail=${userEmail}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMineDatas(data))
    }, [url])

    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table">
                <thead>
                    <tr>
                        <th>Assignment Title</th>
                        <th>Assignment Status</th>
                        <th>Assignment Mark</th>
                        <th>Obtain Mark</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mineDatas.map((assignment, index) => <MineAssignment assignment={assignment} key={index}></MineAssignment>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MineAssignments;