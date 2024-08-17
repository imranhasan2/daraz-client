import React, { useContext, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Navbar = () => {


    const { user,logOut } = useContext(AuthContext)

    const navbar = <>
    <li><NavLink to='/' style={({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "green" : "",
        };
    }}>Home</NavLink></li>
    <li><NavLink to='art'
        style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>All Art & craft Items</NavLink></li>
    <li><NavLink to='addCraftItem'
        style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>Add Craft Item</NavLink></li>
    <li><NavLink to="my" style={({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "green" : "",
        };
    }}>My Art&Craft List</NavLink></li>
</>
    return (
        <div className=''>
            <div className="navbar mx-auto bg-[#F85606] flex justify-between   ">
                <div className="flex-none ">

                    <img className='w-48 ' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" />

                </div>

                <div className="flex-none">

                    {/* <div className="navbar bg-base-100 max-w-6xl mx-auto">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        navbar
                                    }
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl text-teal-500">Mintie <br /> Art ANd Craft </a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {
                                    navbar
                                }
                            </ul>
                        </div>
                        <div className="navbar-end">

                            <div>
                                <label className="cursor-pointer grid place-items-center mr-5">
                                    <input
                                        // onChange={handleToggle}
                                        type="checkbox"
                                        value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label>
                            </div> */}
                            {user ?
                                <div className="relative flex gap-3">

                                    <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"} alt="User" className="w-10 h-10 rounded-full cursor-pointer" />


                                    <span className="absolute top-0 left-full ml-2 bg-white p-1 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        {user.displayName}
                                    </span>


                                    <button className="bg-green-500 px-3 py-1 rounded-xl" onClick={logOut}>
                                        LogOut
                                    </button>
                                </div>

                                : <div>
                                    <Link to='/login' className="btn bg-red-500 text-white mr-5">Login</Link>
                                    <Link to="/register" className="btn bg-blue-500 text-white">Register</Link>

                                </div>

                            }
                        </div>
                    </div>

                </div>
            
    );
};

export default Navbar;