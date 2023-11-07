import { useEffect } from "react";
import { Link } from "react-router-dom";

const MyAssignments = ({ assignment, remainingAssignment, setRemainingAssignment }) => {

    const { _id, title, mark, userEmail, photo, userName } = assignment || {};

    useEffect(() => {
        const remaining = remainingAssignment.filter(remaining => remaining.status !== "Completed");
        setRemainingAssignment(remaining);
    }, [remainingAssignment, setRemainingAssignment])

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-medium md:text-lg">{title}</p>
                        <p className="font-medium md:text-lg">{mark} Marks</p>
                    </div>
                </div>
            </td>
            <td>
                <span className="font-medium md:text-lg">{userName}</span><br />
                <p className="text-base">{userEmail}</p>
            </td>
            <th>Pending</th>
            <Link to={`/patchAssignment/${_id}`}><p className="mt-7 w-28 text-center py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955]">Give Mark</p></Link>
        </tr>
    );
};

export default MyAssignments;

