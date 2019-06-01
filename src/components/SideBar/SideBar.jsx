import React from 'react';
import classes from './SideBar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = (props) => {
	 let menuElement = props.menu.map(m =>
		 <div key={m.id} className={classes.menu_item}>
				<NavLink exact
								 to={m.menuItem}
								 activeClassName={classes.activeLink}
				>{m.name}
				</NavLink>
		 </div>);

	 /*let favFriends = props.friends
	 .filter(f => f.best)
	 .map(f =>
		 <figure key={f.id}>
				<img src={f.ava} alt="ava"/>
				<br/>
				<figcaption>{f.name}</figcaption>
		 </figure>);*/

	 return (
		 <div className={classes.nav}>
				<div>
					 {menuElement}
				</div>
				{/*<h2>Friends</h2>
				<div className={classes.fav_friends}>
					 {favFriends}
				</div>*/}
		 </div>
	 );
};

export default SideBar