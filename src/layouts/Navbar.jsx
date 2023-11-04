import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

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
        <div className="w-full navbar">
            <div className="container mx-auto">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1">
                    <img className="w-[200px]" src="https://uploads-ssl.webflow.com/60890f6ac44206aef9237eb4/6089361c2665da7acc8cda8d_StudyTogetherColour.svg" alt="" />
                </div>
                <div className="flex-none hidden lg:block">
                    <div className="flex justify-center items-center gap-5">
                        {/* Navbar menu content here */}
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-gradient-to-r from-[#DD2955] to-orange-800 py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl text-white font-semibold" : ""
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
                                    isPending ? "pending" : isActive ? "bg-gradient-to-r from-[#DD2955] to-orange-800 py-1 px-3 md:py-2 md:px-5 rounded-lg text-xl text-white font-semibold" : ""
                                }
                            >
                                <span className="text-xl font-semibold">Login</span>
                            </NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;