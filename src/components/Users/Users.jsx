import React from 'react';
import classes from './Users.module.css'
import photo from '../../assets/images/ava_post.jfif'
import {NavLink} from "react-router-dom";


const Users = (props) => {
	 let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	 let pages = [];
	 for (let i = 1; i <= pagesCount; i++) pages.push(i);


	 let pagination = pages.map((page, i) => (
		 <span key={i}
					 className={classes.pageCount + " " + (props.currentPage === page ? classes.activePageCount : "")}
					 onClick={() => props.onPageCountChanged(page)}>
				{`${page} `}
		 </span>
	 ));

	 let user = props.users.map(u =>
		 <div key={u.login.uuid}>
				<div>
					 <NavLink to={'/profile/' + u.login.uuid}>
							<img src={u.picture.thumbnail != null ? u.picture.thumbnail : photo}
									 className={classes.userPhoto}
									 alt='User-Ava'/>
					 </NavLink>
					 <div>
							{u.followed ?
								<button onClick={() => props.describe(u.login.uuid)}
								>Describe
								</button> :

								<button onClick={() => props.follow(u.login.uuid)}
								>Follow
								</button>}
					 </div>
				</div>

				<div className={classes.userName}>Name: {u.name.first} {u.name.last}</div>
				<div>Status: {u.status || "Offline"}</div>
				<div>Birthday: {new Date(u.dob.date).toLocaleDateString()}</div>
				<div>Country: {u.nat.toLocaleString()}</div>
				<div className={classes.userCity}>City:
					 <a href={`https://www.google.com/maps/place/${u.location.city}`}
							target='_blank'
					 > {u.location.city}
					 </a>
				</div>

		 </div>
	 );

	 return (
		 <>
				{pagination}
				{props.isLoading ? <div>Loading</div> : user}
		 </>
	 )

};

export default Users