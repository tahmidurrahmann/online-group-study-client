import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { AiOutlineLogout } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdAssignmentAdd } from 'react-icons/md';
import { MdAssignmentTurnedIn } from 'react-icons/md';
import { MdOutlineAssignmentInd } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';

const Drawer = () => {

    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successful")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="flex flex-col mt-3 justify-center items-center gap-12">
            {/* Navbar menu content here */}
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "flex justify-center items-center gap-1 border border-[#DD2955] py-1 px-3 rounded-lg  text-[#DD2955] font-medium" : "font-medium"
                }
            >
                <span className="flex justify-center items-center gap-1"><FaHome></FaHome>Home</span>
            </NavLink>
            <NavLink
                to="/createAssignment"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "flex justify-center items-center gap-1 border border-[#DD2955] py-1 px-3 rounded-lg  text-[#DD2955] font-medium" : "font-medium"
                }
            >
                <span className="flex justify-center items-center gap-1"><MdAssignmentAdd></MdAssignmentAdd>Create Assignments</span>
            </NavLink>
            <NavLink
                to="/allAssignment"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "flex justify-center items-center gap-1 border border-[#DD2955] py-1 px-3 rounded-lg  text-[#DD2955] font-medium" : "font-medium"
                }
            >
                <span className="flex justify-center items-center gap-1"><MdOutlineAssignment></MdOutlineAssignment>Assignments</span>
            </NavLink>
            <NavLink
                to="/submittedAssignments"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "flex justify-center items-center gap-1 border border-[#DD2955] py-1 px-3 rounded-lg  text-[#DD2955] font-medium" : "font-medium"
                }
            >
                <span className="flex justify-center items-center gap-1"><MdAssignmentTurnedIn></MdAssignmentTurnedIn>Submitted Assignments</span>
            </NavLink>
            <NavLink
                to="/myAssignments"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "flex justify-center items-center gap-1 border border-[#DD2955] py-1 px-3 text-center rounded-lg  text-[#DD2955] font-medium" : "my-3 font-medium text-center"
                }
            >
                <span className="flex justify-center items-center gap-1"><MdOutlineAssignmentInd></MdOutlineAssignmentInd>My Assignments</span>
            </NavLink>
            {user?.email ? <div className="flex justify-center items-center gap-3">
                <button onClick={handleLogout} className="flex justify-center gap-2 items-center text-white bg-gradient-to-r from-[#DD2955] to-orange-800 py-2 px-4 rounded-full"><AiOutlineLogout className="text-lg"></AiOutlineLogout>Logout</button>
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-ghost rounded-btn"><img src={user?.photoURL} className="rounded-full w-[60px]" alt="text-xl font-medium" /></label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-3 shadow bg-base-100 rounded-box w-52 mt-4 space-y-3">
                        <h1 className="text-[#DD2955] text-center font-medium">{user?.displayName}</h1>
                    </ul>
                </div>
            </div>
                : <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border border-[#DD2955] py-1 px-3 rounded-lg  text-[#DD2955] font-medium" : "font-medium"
                    }
                >
                    <span>Login</span>
                </NavLink>}
        </div>
    );
};

export default Drawer;