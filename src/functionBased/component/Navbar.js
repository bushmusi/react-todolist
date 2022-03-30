import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [navBarOpen,setNavBarOpen]=useState(false);
    const links = [
        {
          id: 1,
          path: "/",
          text: "Home",
        },
        {
          id: 2,
          path: "/about",
          text: "About",
        },
    ]

    const handleToggle = () => {
        setNavBarOpen(prev => !prev);
    }

    const closeMenu = () => setNavBarOpen(false)

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>
            {navBarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}
            </button>
            <ul className={`menuNav ${navBarOpen ? "showMenu" : ""}`}>
                {
                    links.map( item => {
                        return (
                            <li key={item.id}>
                                <NavLink 
                                    to={item.path} 
                                    activeClassName='active-link'
                                    onClick={() => closeMenu()}
                                    exact
                                >
                                        {item.text}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;