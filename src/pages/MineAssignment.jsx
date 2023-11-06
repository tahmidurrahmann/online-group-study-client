const MineAssignment = ({ assignment }) => {

    const { title, mark, giveMark, feedback, status } = assignment;
    console.log(assignment);
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="flex flex-col gap-1">
                        <p className="font-bold">{title}</p>
                    </div>
                </div>
            </td>
            <td>
                <p>{status? status : "Pending"}</p>
            </td>
            <th>{mark}</th>
            <td>{giveMark}</td>
            <td>{feedback}</td>
        </tr>
    );
};

export default MineAssignment;