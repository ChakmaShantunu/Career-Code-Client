import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";


const Navbar = () => {

    const { user } = use(AuthContext);

    const links = <>
        <Link to='/'><li className="m-2 cursor-pointer">Home</li></Link>
        <Link to='/about'><li className="m-2 cursor-pointer">About</li></Link>
        <Link to='/readList'><li className="m-2 cursor-pointer">Read List</li></Link>
        <Link to='/wishList'><li className="m-2 cursor-pointer">Wish List</li></Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl font-bold">Career Code</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                    {/* <li><a>Item 1</a></li> */}

                    {/* <li>
                        <details>
                            <summary>Parent</summary>

                            <ul className="p-2 bg-base-100 w-40 z-1">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}

                    {/* <li><a>Item 3</a></li> */}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <button className="btn">Sign Out</button> : <>
                        <NavLink className="btn" to="/register">Register</NavLink>
                        <NavLink className="btn" to="/signIn">SignIn</NavLink>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;