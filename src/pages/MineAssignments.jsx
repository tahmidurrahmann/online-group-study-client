import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MineAssignment from "./MineAssignment";
import axios from "axios";

const MineAssignments = () => {



    const { user } = useAuth();
    console.log(user);
    const userEmail = user.email;
    const [mineDatas, setMineDatas] = useState([]);
    
    useEffect(()=>{
        axios.get(`https://online-group-study-server-blush.vercel.app/take-assignment?userEmail=${userEmail}`,{withCredentials : true})
        .then(res => setMineDatas(res?.data))
    },[userEmail])

    // useEffect(() => {
    //     const url = `https://online-group-study-server-blush.vercel.app/take-assignment?userEmail=${userEmail}`
    //     fetch(url,{credentials : "include"})
    //         .then(res => res.json())
    //         .then(data => setMineDatas(data))
    // }, [ userEmail])

    return (
        <div className="overflow-x-auto min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-200">
            <table className="table">
                <thead>
                    <tr className="text-base">
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