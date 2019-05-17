import React from 'react';
import classes from './Users.module.css'
import photo from '../../assets/images/ava_post.jfif'


const Users = ({users, follow, describe}) => {
	 let user = users.map(u =>

		 <div key={u.id}>
				<div>
					 <img src={u.photos.small != null ? u.photos.small : photo}
								className={classes.userPhoto}
								alt='User-Ava'/>

					 <div>
							{u.followed ?
								<button onClick={() => {
									 describe(u.id)
								}}
								>Describe
								</button> :

								<button onClick={() => {
									 follow(u.id)
								}}
								>Follow
								</button>}
					 </div>
				</div>

				<div>{u.name}</div>
				<div>{u.status || "Offline"}</div>

				<div>{'u.location.country'}</div>
				<div>{'u.location.city'}</div>

		 </div>
	 );

	 return (
		 user
	 )

};

export default Users