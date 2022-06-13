import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import AuthContext from '../../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const userIsLoggedIn = authContext.isLoggedIn;

    function logoutHandler() {
        authContext.logout();
        navigate('/');
    }

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    {!userIsLoggedIn && (
                        <li>
                            <NavLink to='/auth' className={navData => navData.isActive ? classes.active : ''}>
                                Login
                            </NavLink>
                        </li>
                    )}

                    {userIsLoggedIn && (
                        <li>
                            <button className={classes.buttonNavigation} onClick={logoutHandler}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;