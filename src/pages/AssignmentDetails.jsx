import { useLoaderData } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const AssignmentDetails = () => {

    const details = useLoaderData();
    const { date, description, difficult, mark, photo, title } = details;

    const axios = useAxios();

    const {user} = useAuth();
    const userEmail = user?.email;
    const userName = user?.displayName;
    
    const handlePdfSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const pdf = form.pdf.value;
        const quickNote = form.quickNote.value;
        
        const links = { pdf, quickNote, date, description, difficult, mark, photo, title, userEmail, userName }
        axios.post('/take-assignment', links)
            .then(res => {
                if (res?.data?.insertedId) {
                    toast.success('You Submitted this assignment')
                }
            })

    }

    return (
        <div className="bg-gradient-to-r from-white to-gray-400 py-20 w-full mx-auto">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 flex items-center">
                        <img className="w-3/4 mx-auto" src={photo} alt="" />
                    </div>
                    <div className="flex items-center px-10 lg:px-0">
                        <div className="space-y-6 md:space-y-12 text-center md:text-left">
                            <h2 className="text-xl font-semibold my-6">{date}</h2>
                            <h2 className="text-3xl font-bold">{title}</h2>
                            <h2 className="text-xl font-bold">{mark} Marks</h2>
                            <p className="text-gray-500">{description}</p>
                            <p className="text-xl font-semibold">{difficult} Level</p>
                            <div className="flex gap-3 md:justify-start md:items-start justify-center items-center">
                                <button className="bg-gradient-to-r from-[#DD2955] to-orange-800 text-white font-medium text-xl px-4 py-1.5 rounded-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <form onSubmit={handlePdfSubmit}>
                                            <div className="form-control mt-8">
                                                {/* <input type="text" name="pdf" placeholder=" PDF link of your assignment" className="mt-8 w-full my-4 input input-bordered bg-gradient-to-r from-white to-gray-400" /> */}
                                                <input type="file" className="form-control w-full bg-gradient-to-r rounded from-white to-gray-400" name="pdf" id="" /> <br />
                                            </div>
                                            <textarea name="quickNote" className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" placeholder="You can note somethings here" cols="3" rows="3"></textarea>
                                            <div className="flex justify-center">
                                                <input className="w-full py-2 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3" type="submit" value="Submit" />
                                            </div>
                                        </form>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;