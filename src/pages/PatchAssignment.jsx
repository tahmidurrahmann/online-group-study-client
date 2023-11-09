import { useNavigate, useParams } from "react-router-dom";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Loading from "../loader/Loading";
const PatchAssignment = () => {

    const navigate = useNavigate();
    const { id } = useParams()
    const axios = useAxios();

    const getServices = async () => {
        const res = await axios.get(`/take-assignment/${id}`)
        return res;
    }

    const { data: pdfData, isLoading, isError, error } = useQuery({
        queryKey: ['pdfViewer'],
        queryFn: getServices,
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isError) {
        console.log(error)
    }

    const patchData = pdfData?.data;
    const { pdf, quickNote } = patchData;

    console.log(pdf);
    const handleMarkSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const giveMark = form.giveMark.value;
        const feedback = form.feedback.value;
        const status = "Completed";
        const submittedValue = { giveMark, feedback, status };
        console.log(submittedValue);
        fetch(`https://online-group-study-server-blush.vercel.app/take-assignment/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    navigate('/myAssignments')
                }
            })
    }

    return (
        <div>
            <div>
                <div>
                    <iframe className="mx-auto w-1/2 h-[600px]" src={pdf} title="Assignment Pdf Link"></iframe>
                </div>
            </div>
            <p className="w-1/2 mx-auto py-4 text-lg font-semibold">Quick Note : <span className="ml-3">{quickNote}</span></p>
            <form onSubmit={handleMarkSubmit} className="w-1/2 mx-auto min-h-screen">
                <div className="form-control my-10">
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