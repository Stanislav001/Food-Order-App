import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footerCol}>
                        <h4>Stas Panda</h4>
                        <ul>
                            <li><Link to="/">Home Page</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}