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
        <div className="flex flex-col mt-3 justify-center items-center gap-5">
        {/* Navbar menu content here */}
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-gradient-to-r from-[#DD2955] to-orange-800 w-full text-center py-3 rounded-lg text-xl text-white font-semibold" : ""
            }
        >
            <span className="text-xl font-semibold">Home</span>
        </NavLink>
        {user?.email ? <div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost rounded-btn"><img src={user?.photoURL} className="rounded-full w-[60px]" alt="" /></label>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    <button onClick={handleLogout} className="text-[#DD2955] text-xl">Logout</button>
                                </ul>
                            </div>
                        </div>
                            : <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-gradient-to-r from-[#DD2955] to-orange-800 w-full text-center py-3 rounded-lg text-xl text-white font-semibold" : ""
                                }
                            >
                                <span className="text-2xl font-bold">Login</span>
                            </NavLink>}
    </div>
    );
};

export default Drawer;