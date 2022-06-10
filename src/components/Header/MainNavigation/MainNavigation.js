import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' className={navData => navData.isActive ? classes.active : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={navData => navData.isActive ? classes.active : ''}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactUs' className={navData => navData.isActive ? classes.active : ''}>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;