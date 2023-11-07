import Navbar from "./Navbar";
import Drawer from "./Drawer";

const MainLayout = ({ children }) => {
    return (
        <div className="drawer bg-gradient-to-r from-gray-200 via-white to-gray-200">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar></Navbar>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                   <Drawer></Drawer>
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;