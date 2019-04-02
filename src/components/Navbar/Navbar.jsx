import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar