import React from 'react';
import classes from './Users.module.css'
import photo from '../../assets/images/ava_post.jfif'
import {NavLink} from "react-router-dom";
import {useSelector} from 'react-redux'


const Users = (props) => {
	 let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	 let pages = [];
	 for (let i = 1; i <= pagesCount; i++) pages.push(i);


	 const pagination = pages.map((page, i) => (
		 <span key={i}
					 className={classes.pageCount + " " + (props.currentPage === page ? classes.activePageCount : "")}
					 onClick={() => props.onPageCountChanged(page)}>
				{`${page} `}
		 </span>
	 ));

	 const users = props.users.map(u =>
		 <div key={u.id}>
				<div>
					 <NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small || photo}
									 className={classes.userPhoto}
									 alt='User-Ava'/>
					 </NavLink>
					 <div>
							{u.followed ?
								<button onClick={() => props.describe(u.id)}
								>Describe
								</button> :
								<button onClick={() => props.follow(u.id)}
								>Follow
								</button>}
					 </div>
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


	 const usersCount = useSelector(state => state.usersPage.totalUsersCount);

	 return (
		 <>
				<div>{usersCount}</div>
				{pagination}
				{props.isLoading ? <div>Loading</div> : users}
		 </>
	 )
};

export default Users