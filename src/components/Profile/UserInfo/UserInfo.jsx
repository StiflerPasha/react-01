import React from 'react';
import classes from './UserInfo.module.css'


const UserInfo = (props) => {
	 return (
		 <div className={[classes.page_block, props.className].join(' ')}>
				<h2>Name: {props.name}</h2>
				<div>Date of birth: {props.date}</div>
				<div>City: {props.city}</div>
				<div>Education: {props.edu}</div>
				<div>Web Site: {props.site}</div>
		 </div>
	 )
};

export default UserInfo