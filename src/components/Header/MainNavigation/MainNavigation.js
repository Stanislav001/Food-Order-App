import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/register' className={navData => navData.isActive ? classes.active : ''}>
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' className={navData => navData.isActive ? classes.active : ''}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;