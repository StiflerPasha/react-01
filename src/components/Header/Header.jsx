import React from 'react';
import imgTest from '../../logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={imgTest} alt="logo" />
        </header>
    );
};

export default Header