// import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PatchAssignment = () => {

    const {id} = useParams()

    // useEffect(()=>{
    //     fetch('')
    // },[])

    const navigate = useNavigate();

    const handleMarkSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const giveMark = form.giveMark.value;
        const feedback = form.feedback.value;
        const status =  "Completed";
        const submittedValue = {giveMark, feedback, status};
        console.log(submittedValue);
        fetch(`http://localhost:5010/take-assignment/${id}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(submittedValue)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.modifiedCount){
                navigate('/myAssignments')
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleMarkSubmit} className="w-1/2 mx-auto min-h-screen">
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
    );
};

export default PatchAssignment;