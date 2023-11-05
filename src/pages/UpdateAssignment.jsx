import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const UpdateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const updateSingleAssignment = useLoaderData();
    const { _id , title,
        email,
        mark,
        photo,
        date,
        description,
        difficult, } = updateSingleAssignment;
        console.log(updateSingleAssignment);

    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const mark = form.mark.value;
        const photo = form.photo.value;
        const date = form.date.value;
        const description = form.description.value;
        const difficult = form.difficult.value;
        const data = { title, email, mark, photo, date, description, difficult };
        console.log(data);
        fetch(`http://localhost:5010/create-assignment/${_id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.modifiedCount){
                Swal.fire(
                    'Good job!',
                    'You Updated your assignment!',
                    'success'
                  )
                    navigate('/allAssignment')
            }
            else{
                Swal.fire(
                    'Cancelled',
                    'You should change any field for updating your assignment!',
                    'error'
                  )
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleUpdateAssignment} className="my-10">
                <h1 className="text-center my-4 text-2xl md:text-3xl font-bold">Update your assignment</h1>
                <div className="flex md:flex-row flex-col gap-6 w-3/4 mx-auto my-8">
                    <div className="flex-1 form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" defaultValue={title} name="title" placeholder="Title" className="input input-bordered bg-gradient-to-r from-white to-gray-400" required />
                    </div>
                    <div className="flex-1">
                        <div className="flex-1 form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={email} type="email" name="email" placeholder="email" className="input input-bordered bg-gradient-to-r from-white to-gray-400" required />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6 w-3/4 mx-auto my-8">
                    <div className="flex-1">
                        <div className="flex-1 form-control">
                            <label className="label">
                                <span className="label-text">Mark</span>
                            </label>
                            <input defaultValue={mark} type="text" name="mark" placeholder="Mark" className="input input-bordered bg-gradient-to-r from-white to-gray-400" required />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex-1 form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail Image URL</span>
                            </label>
                            <input defaultValue={photo} type="text" name="photo" placeholder="Thumbnail Image URL" className="input input-bordered bg-gradient-to-r from-white to-gray-400" required />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6 w-3/4 mx-auto my-8">
                    <div className="flex-1">
                        <DatePicker name="date" defaultValue={date} className="w-full border px-24 py-3 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="flex-1">
                        <select defaultValue={difficult} name="difficult" className="select select-bordered w-full mb-4 border rounded-md" >
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>
                <div className="w-3/4 mx-auto">
                    <textarea defaultValue={description} required name="description" className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" placeholder="Describe your assignment here" cols="15" rows="6"></textarea>
                </div>
                <div className="w-3/4 mx-auto my-4">
                    <input type="submit" className="w-full text-white font-medium py-1 lg:py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" value="Update your Assignment" /> </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;