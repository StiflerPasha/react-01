import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    let menuElement = props.sideBar.menu.map(m =>
        <div className={classes.menu_item}>
            <NavLink
                to={m.menuItem}
                activeClassName={classes.activeLink}
            >{m.name}
            </NavLink>
        </div>);

    let favFriends = props.sideBar.friends.map(f =>
        <figure>
            <img src={f.ava} alt="ava"/>
            <br/>
            <figcaption>{f.name}</figcaption>
        </figure>);

    return (
        <div className={classes.nav}>
            <div>
                {menuElement}
            </div>
            <h2>Friends</h2>
            <div className={classes.fav_friends}>
                {favFriends}
            </div>
        </div>
    );
};

export default Navbar