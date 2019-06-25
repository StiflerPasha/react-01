import React from 'react';
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";
import photo from "../../assets/images/ava_post.jfif";

const Friends = ({friends}) => {
	 const showFriends = friends.map(u =>
		 <div key={u.id}>
				<div>
					 <NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small || photo}
									 className={classes.userPhoto}
									 alt='User-Ava'/>
					 </NavLink>
				</div>

				<div className={classes.userName}>Name: {u.name}</div>
				<div>Status: {u.status || "Offline"}</div>
				{/*<div>Birthday: {new Date(u.dob.date).toLocaleDateString()}</div>
				<div>Country: {u.nat.toLocaleString()}</div>
				<div className={classes.userCity}>
					 City:
					 <a href={`https://www.google.com/maps/place/${u.location.city}`}
							target='_blank' rel="noopener noreferrer">
							{u.location.city}
					 </a>
				</div>*/}
		 </div>
	 );

	 return (
		 <>
				<p>Hello Friends</p>
				{showFriends}
		 </>
	 );
};

export default Friends