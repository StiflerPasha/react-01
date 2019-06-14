import React from 'react';
import imgTest from '../../logo.svg';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	 return (
		 <header className={classes.header}>
				<img src={imgTest} alt="logo"/>
				<div className={classes.loginBlock}>
					 {props.isAuth
						 ? props.email
						 : <NavLink to={'/login'}>Login</NavLink>}
				</div>
		 </header>
	 );
};

export default Header