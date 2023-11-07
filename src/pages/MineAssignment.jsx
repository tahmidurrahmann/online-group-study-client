const MineAssignment = ({ assignment }) => {

    const { title, mark, giveMark, feedback, status } = assignment;
    
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="flex flex-col gap-1">
                        <p className="font-medium md:text-lg">{title}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className={status ? "text-blue-600 md:text-lg font-medium" : 'text-[#DD2955] font-medium md:text-lg'}>{status? status : "Pending"}</p>
            </td>
            <th className="md:text-lg">{mark}</th>
            <td className={giveMark ? "md:text-lg" : ""}>{giveMark? giveMark : "Not Given"}</td>
            <td className={feedback ? "md:text-lg" : ""}>{feedback? feedback : "Not Given"}</td>
        </tr>
    );
};

export default MineAssignment;