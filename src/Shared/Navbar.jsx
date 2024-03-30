import { Link, NavLink } from "react-router-dom";
import logo from "../assets/doclo.png";
import "./style.css";
// import Banner from "../Pages/Home/Banner";

const Navbar = () => {
  // const links

  return (
    <div className="nav-body">
      <div className="navbar  flex p-8 justify-between">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              
                <NavLink to={"/"}>Home</NavLink>
           

            
                <NavLink to={"/"}>About</NavLink>
              
                <NavLink to={"/appointment"}>Appoointment</NavLink>
             
             
                <NavLink to={"/appointment"}>Login</NavLink>
             
            </ul>
          </div>
          <Link>
            <img className="w-32 h-16 rounded-xl ml-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden mb-10 lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-xl font-bold">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/appointment"}>Appointment</NavLink>
            <NavLink to={'/profile'}>About</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </ul>
        </div>
      
      </div>
      {/* <Banner/> */}
    </div>
  );
};

export default Navbar;
