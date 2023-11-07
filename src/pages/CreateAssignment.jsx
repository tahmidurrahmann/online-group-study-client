import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const CreateAssignment = () => {

    const axios = useAxios();

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    const handleSubmitAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const mark = form.mark.value;
        const photo = form.photo.value;
        const date = form.date.value;
        const description = form.description.value;
        const difficult = form.difficult.value;
        const assignmentData = {
            title, 
            email,
            mark,
            photo,
            date,
            description,
            difficult,
        }
        console.log(assignmentData);
        axios.post('/create-assignment', assignmentData)
        .then(res => {
            if(res?.data?.insertedId){
                Swal.fire(
                    'Well done!',
                    'You submitted your assignment!',
                    'success'
                  )
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmitAssignment} className="my-10">
                <h1 className="text-center my-4 text-2xl md:text-3xl font-bold">Submit your assignment here!</h1>
                <div className="flex md:flex-row flex-col gap-6 w-3/4 mx-auto my-8">
                    <div className="flex-1 form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="flex-1">
                        <div className="flex-1 form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6 w-3/4 mx-auto my-8">
                    <div className="flex-1">
                        <div className="flex-1 form-control">
                            <label className="label">
                                <span className="label-text">Mark</span>
                            </label>
                            <input type="text" name="mark" placeholder="Mark" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex-1 form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Thumbnail Image URL" className="input input-bordered" required />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6 w-3/4 mx-auto my-8">
                    <div className="flex-1">
                        <DatePicker name="date" className="w-full border px-24 py-3 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="flex-1">
                        <select name="difficult" className="select select-bordered w-full mb-4 border rounded-md" >
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>
                <div className="w-3/4 mx-auto">
                    <textarea required name="description" className="w-full p-4 mb-4 border rounded-md" placeholder="Describe your assignment here" cols="15" rows="6"></textarea>
                </div>
                    <div className="w-3/4 mx-auto my-4">
                    <input type="submit" className="w-full text-white font-medium py-1 lg:py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" value="Submit your Assignment" /> </div> 
            </form>
        </div>
    );
};

export default CreateAssignment;