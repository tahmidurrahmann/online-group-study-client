import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

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
                    isPending ? "pending" : isActive ? "border border-[#DD2955] w-full text-center py-2 rounded-lg text-lg text-[#DD2955] font-semibold" : "font-bold text-lg"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/createAssignment"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-[#DD2955] w-full text-center py-2 rounded-lg text-lg text-[#DD2955] font-semibold" : "font-bold text-lg"
                }
            >
                Create Assignment
            </NavLink>
            <NavLink
                to="/allAssignment"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-[#DD2955] w-full text-center py-2 rounded-lg text-lg text-[#DD2955] font-semibold" : "font-bold text-lg"
                }
            >
                All Assignment
            </NavLink>
            <NavLink
                to="/submittedAssignments"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-[#DD2955] w-full text-center py-2 rounded-lg text-lg text-[#DD2955] font-semibold" : "font-bold text-lg"
                }
            >
                Submitted Assignments
            </NavLink>
            {user?.email ? <div>
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-ghost rounded-btn"><img src={user?.photoURL} className="rounded-full w-[60px]" alt="font-bold" /></label>
                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3 mt-4">
                        <h1 className="text-blue-600 text-center font-bold">{user?.displayName}</h1>
                        <NavLink
                            to="/myAssignments"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "border border-[#DD2955] py-1 px-3 text-center rounded-lg  text-[#DD2955] font-semibold" : "my-3 font-bold text-center"
                            }
                        >
                            <span>My Assignments</span>
                        </NavLink>
                        <button onClick={handleLogout} className="text-[#DD2955] text-xl font-extrabold">Logout</button>
                    </ul>
                </div>
            </div>
                : <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "border border-[#DD2955] w-full text-center py-2 rounded-lg text-lg text-[#DD2955] font-semibold" : "font-bold text-lg"
                    }
                >
                    Login
                </NavLink>}
        </div>
    );
};

export default Drawer;