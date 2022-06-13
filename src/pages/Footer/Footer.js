import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

import AuthContext from '../../store/auth-context';

export default function Footer() {
    const authContext = useContext(AuthContext);

    const userIsLoggedIn = authContext.isLoggedIn;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footerCol}>
                        <h4>Stas Panda</h4>
                        <ul>
                            <li><Link to="/">Home Page</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            {userIsLoggedIn && <li><Link to="/contactUs">Contact Us</Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}