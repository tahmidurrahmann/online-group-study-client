import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { AiOutlineLogout } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdAssignmentAdd } from 'react-icons/md';
import { MdAssignmentTurnedIn } from 'react-icons/md';
import { MdOutlineAssignmentInd } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';
import { useEffect, useState } from "react";

const Navbar = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );

    const handletoggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

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
        <div className="w-full navbar shadow-2xl">
            <div className="container mx-auto">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1">
                    {/* <img className="w-[150px]" src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6089361c2665da7acc8cda8d_StudyTogetherColour.svg" alt="font-medium" /> */}
                    <h1 className="flex text-3xl font-extrabold justify-center items-center"><img className="w-[60px]" src="https://i.ibb.co/9tvcHXG/png-transparent-logo-s-miscellaneous-blue-angle-thumbnail-removebg-preview.png" alt="" />tudyTogether</h1>
                </div>
                <div className="flex-none hidden lg:block">
                    <div className="flex justify-center items-center gap-8">
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
                        <label className="swap swap-rotate">
                            <input onChange={handletoggle} type="checkbox" />
                            <svg
                                className="swap-on fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            <svg
                                className="swap-off fill-current w-10 h-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;