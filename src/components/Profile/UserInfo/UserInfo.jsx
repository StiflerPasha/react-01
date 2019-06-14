import React from 'react';
import classes from './UserInfo.module.css'


const UserInfo = (props) => {
	 return (
		 <div className={[classes.page_block, props.className].join(' ')}>
				<h2>Name: <span>{props.name}</span></h2>
				{/*<div>Date of birth: {new Date(props.date).toLocaleDateString()}</div>
				<div>City: <span>{props.city}</span></div>
				<div>E-mail: {props.site}</div>*/}
		 </div>
	 )
};

export default UserInfo