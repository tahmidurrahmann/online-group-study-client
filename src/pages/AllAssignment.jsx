import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const AllAssignment = ({ assignment, assignmentData, setAssignmentData }) => {

    const { _id, difficult, mark, photo, title } = assignment;
    const { user } = useAuth();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5010/create-assignment/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: user?.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = assignmentData.filter(assignment => assignment._id !== id);
                            setAssignmentData(remaining);
                        }
                        else {
                            Swal.fire(
                                'Cancelled',
                                `${data?.message}`,
                                'error'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className='p-10 md:p-4 rounded-lg'>
                <div className="card shadow-xl bg-gradient-to-r from-white via-white to-gray-200">
                    <img className='rounded-t-lg w-full h-[250px]' src={photo} alt="Shoes" />
                    <div className="space-y-5">
                        <h2 className="text-center my-4 text-2xl font-bold">{title}</h2>
                        <div className='flex justify-evenly items-center'>
                            <p className='font-semibold'>{mark} Marks</p>
                            <p className='font-semibold'>{difficult} Level</p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1.5">
                            <Link to={`/allAssignment/${_id}`}><button className="px-5 py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3">View Assignment</button></Link>
                            <Link to={`/update/${_id}`}><button className="mb-3 px-5 py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955]">Update Assignment</button></Link>
                            <button onClick={() => handleDelete(_id)} className="mb-3 px-5 py-1 text-xl hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg text-[#DD2955]"><AiFillDelete></AiFillDelete></button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AllAssignment;