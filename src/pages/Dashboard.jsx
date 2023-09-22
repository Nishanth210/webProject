import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "../index.css";
function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>
            {/* <button type="button" onClick={toggleSidebar} className="sm:hidden">
                <AiOutlineMenuUnfold />
            </button> */}

            <aside className= "w-58 z-40 h-[28rem] translate-x-0 ">
                <div className="h-full sm:translate-x-0 py-4  bg-gray-100 ">
                    <ul className="font-medium">
                        <li className="mt-2">
                            <span className="text-lg text-sky-400 font-bold">
                                <p>Dropdown</p>
                            </span>
                        </li>

                        <li className="hover:bg-gray-400 font-serif  px-5 mt-4 hover:text-white">
                            <Link to="/demo">Department List</Link>
                        </li>
                        <li className="hover:bg-gray-400 font-serif  px-5 mt-4 hover:text-white">
                            <Link to="/lablist">Labs List</Link>
                        </li>
                        <li className="hover:bg-gray-400 font-serif  px-5 mt-4 hover:text-white">
                            <Link to="/issueslist">Issues List</Link>
                        </li>
                        <li className="hover:bg-gray-400 font-serif  px-5 mt-4 hover:text-white">
                            <Link to="/purchaselist">Purchase order List</Link>
                        </li>
                        <li className="hover:bg-gray-400 px-5 font-serif  mt-4 hover:text-white">
                            <Link to="/equipmentlist">Equipment List</Link>
                        </li>
                        <li className="hover:bg-gray-400 px-5 mt-4 font-serif  hover:text-white">
                            <Link to="/equipmentreviewlist">Equipment Review</Link>
                        </li>
                        <li className=" text-sky-400 transition ease-in-out delay-150 hover:translate-x-2 text-2xl font-serif absolute bottom-0 left-0 ml-5 mb-5">
                            <Link to="/equipmentreviewlist">Logout -> </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Dashboard;
