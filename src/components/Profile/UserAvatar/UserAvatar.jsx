import React from 'react';
import classes from './UserAvatar.module.css'


const UserAvatar = (props) => {
	 let avatar = "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg";
	 return (
		 <div className={[classes.page_block, props.className].join(' ')}>
				<img src={avatar} alt="avatar"/>
				<div className={classes.buttons}>
					 <button>Hello</button>
					 <button>Hello</button>
				</div>
		 </div>

	 )
};

export default UserAvatar