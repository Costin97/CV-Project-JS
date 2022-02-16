import React, { Fragment } from 'react';
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import Image from '../../usables/Image';

const Header = () => {
    return (
        <Fragment >
            <header className={classes.header}>
                <div className={classes.logo}>CURRICULUM VITAE</div>
                <nav className={classes.nav}>
                    <ul>
                        <li> <NavLink to='/achievements' activeClassName={classes.active}>SCHOOLING</NavLink></li>
                        <li> <NavLink to='/dorinte' activeClassName={classes.active}>WISHES</NavLink></li>
                        <li> <NavLink to='/aptitudini' activeClassName={classes.active}>SKILLS</NavLink></li>
                    </ul>
                </nav>
            </header>
            <section>
                <Image></Image>
            </section>
        </Fragment>
    )
}

export default Header;