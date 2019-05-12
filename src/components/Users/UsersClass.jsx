import React from 'react';
import classes from './Users.module.css'
import photo from '../../ava_post.jfif'
import * as axios from "axios";


class UsersClass extends React.Component {

	 componentDidMount() {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				 this.props.setUsers(response.data.items)
			});
	 }

	 componentDidUpdate(prevProps, prevState, snapshot) {
	 }


	 render() {
			let user = this.props.users.map(u =>
				<div key={u.id}>
						<span>
								<div>
									<img src={u.photos.small != null ? u.photos.small : photo} className={classes.userPhoto}
											 alt='User-Ava'/>
								</div>
								<div>
									{u.followed ?
										<button onClick={() => {
											 this.props.describe(u.id)
										}}
										>Describe
										</button> :
										<button onClick={() => {
											 this.props.follow(u.id)
										}}
										>Follow
										</button>}
								</div>
							</span>
					 <span>
								<span>
									<div>{u.name}</div>
									<div>{u.status}</div>
								</span>
								<span>
									<div>{'u.location.country'}</div>
									<div>{'u.location.city'}</div>
								</span>
							</span>
				</div>
			);

			return (
				<div>
					 {user}
				</div>
			)
	 }

}

export default UsersClass