import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import './style.css'



const Admin = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="flex">
                    <div className="bg-[#182C61] w-[350px]  mx-auto  min-h-screen">
                        <Link to={'/dashboard'}>
                            <h2 className="text-lime-500 hover:text-lime-600 pb-3 mb-4 border-b text-3xl mt-4 font-bold text-center">Dashboard</h2>
                        </Link>

                        <div className="ml-16  mt-4 text-xl flex flex-col space-y-5 font-bold">
                            <NavLink to={'/allUsers'}>All Users</NavLink>
                            <NavLink to={'/dashboard/addDoctor'}>Add a Doctor</NavLink>
                            <NavLink to={'/manageDoctor'}>Manage Doctor</NavLink>
                            <NavLink to={'/'}>Home</NavLink>
                        </div>

                    </div>
                    <div className="bg-stone-300  w-full px-10 py-8">
                       <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;