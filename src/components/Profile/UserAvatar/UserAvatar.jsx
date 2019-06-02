import React from 'react';
import classes from './UserAvatar.module.css'


const UserAvatar = (props) => {
	 return (
		 <div className={[classes.page_block, props.className].join(' ')}>
				<img src={props.ava} alt="avatar"/>
				{/*<div className={classes.buttons}>
					 <button>Hello</button>
					 <button>Hello</button>
				</div>*/}
		 </div>

	 )
};

export default UserAvatar