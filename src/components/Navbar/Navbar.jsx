import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import { AuthContext } from "../../routes/AuthProvider/AuthProvider"
import toast from "react-hot-toast"
import Swal from "sweetalert2"

const Navbar = () => {
    const { user, logoutUser, setUser } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        Swal.fire({
            title: "Do you want to log out?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!",
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser()
                    .then(() => {
                        setUser(null)
                        toast.success("Successfully logged out!")
                    })
                    .catch((e) => {
                        console.log(e)
                        toast.error("An error Occur!")
                    })
            }
        })
    }

    const navlinks = (
        <>
            <li className="mx-1 font-semibold">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mx-1 font-semibold">
                <NavLink to="/all-tourists-spot">All Tourists Spot</NavLink>
            </li>
            <li className="mx-1 font-semibold">
                <NavLink to="/add-tourists-spot">Add Tourists Spot</NavLink>
            </li>
            <li className="mx-1 font-semibold">
                <NavLink to="/my-list">My List</NavLink>
            </li>
        </>
    )
    return (
        <div className="my-3">
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navlinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn hidden md:flex btn-ghost md:text-xl">
                        TourEase
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navlinks}</ul>
                </div>
                <div className="navbar-end *:flex ">
                    {!user ? (
                        <>
                            <Link to="/login" className="btn">
                                Login
                            </Link>
                            <Link to="/register" className="btn ml-2">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <div
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="bottom"
                                className="bg-neutral text-neutral-content text-sm rounded-full w-10"
                            >
                                <span>
                                    <img className="rounded-full" src={user.photoURL} alt="img" />
                                </span>
                                <Tooltip id="my-tooltip" />
                            </div>
                            <div className="ml-2">
                                <button onClick={handleLogout} className="btn">
                                    Log out
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
