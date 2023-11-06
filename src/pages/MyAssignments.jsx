import { Link } from "react-router-dom";

const MyAssignments = ({ assignment }) => {

    const { _id , title, mark, userEmail, photo, userName } = assignment || {};

    // const handleMarkSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const giveMark = form.giveMark.value;
    //     const feedback = form.feedback.value;
    //     const submittedValue = {giveMark, feedback};
    //     console.log(submittedValue);
    //     fetch(`http://localhost:5010/take-assignment/${_id}`,{
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json",
    //         },
    //         body : JSON.stringify(submittedValue)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }

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
                        <p className="font-bold">{title}</p>
                        <p className="font-bold">{mark} Marks</p>
                    </div>
                </div>
            </td>
            <td>
                {userEmail}
                <br />
                <span className="badge badge-ghost badge-base font-bold">{userName}</span>
            </td>
            <th>Pending</th>
            <Link to={`/patchAssignment/${_id}`}><p className="mt-7 w-28 text-center py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955]">Give Mark</p></Link>
            
            {/* <button className="mt-6 px-5 py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955]" onClick={() => document.getElementById('my_modal_3').showModal()}>Give Mark</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">PDF LINK :<a className="text-blue-600" href={pdf}><span className="ml-3"> Click here for see this PDF</span></a></h3>
                    <p className="py-4 text-lg font-semibold">Quick Note : <span className="ml-3">{quickNote}</span></p>
                    <form onSubmit={handleMarkSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Give Marks</span>
                            </label>
                            <input type="text" name="giveMark" placeholder="Give Marks" className="input input-bordered bg-gradient-to-r from-white to-gray-400" required /> <br />
                        </div>
                        <textarea name="feedback" className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" placeholder="Give your Feedback here" cols="3" rows="3"></textarea>
                        <input className="w-full py-2 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3" type="submit" value="Submit" />
                    </form>
                </div>
            </dialog> */}
        </tr>
    );
};

export default MyAssignments;

