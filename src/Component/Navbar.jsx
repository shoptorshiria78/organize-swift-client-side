import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import PropTypes from 'prop-types';


const NavBar = ({ toggleDarkMode }) => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }

    const Nav = <div className=" space-x-3 text-base">
        <NavLink to='/' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "fuchsia" : " red ",
            };
        }}>Home</NavLink>
        {
            user &&
            <>
                <NavLink to={`/myCart/${user.email}`} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "fuchsia" : " red ",
                    };
                }}>My Cart</NavLink >
                <NavLink to='/addProduct' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "fuchsia" : " red ",
                    };
                }}>Add Product</NavLink >
            </>
        }

    </div>



    return (
        <div className="navbar mt-5 text-r rounded-xl px-12 shadow-xl bg-red-50 max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        {
                            Nav
                        }
                    </ul>
                </div>
                <div className="flex">
                    <img className=" w-8 h-8 md:w-16 md:h-16 bg-fuchsia-100" src="https://i.ibb.co/T40Xw2V/logo-for-skin-care.png" alt="" />
                    <div className="flex flex-col">
                        <div className="text-base md:text-3xl font-bold text-[#E55473]">Beautify</div>
                        <div className="text-sm md:text-xl text-red-400 "><span className="text-base font-bold text-red-500 ">Y</span>ourself</div>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Nav
                    }

                </ul>
            </div >
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL}  />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content space-y-1 rounded-box w-52">
                                <li>
                                    <a className="justify-between bg-[#E55473] text-white px-3 lg:px-5 py-2 text-sm md:text-base rounded">
                                    {user?.displayName}
                                       
                                    </a>
                                </li>
                                <li><Link  to='/dashboard'
                                className=" bg-[#E55473] text-white px-3 lg:px-5 py-2 text-sm md:text-base rounded">DashBoard</Link></li>

                                <li><Link onClick={handleLogOut} to='/'
                                className=" bg-[#E55473] text-white px-3 lg:px-5 py-2 text-sm md:text-base rounded">Log Out </Link></li>
                            </ul>
                        </div>
                        
                        : <div className="mr-1" >
                            <Link to='/login'
                                className=" bg-[#E55473] text-white px-5 py-2 rounded text-sm md:text-base">Log In </Link>
                        </div>
                }
                <input onClick={toggleDarkMode} type="checkbox" className="toggle toggle-error w-10 md:w-12" />
            </div>
        </div>
    );
};

NavBar.propTypes = {

    toggleDarkMode: PropTypes.func,

}

export default NavBar;