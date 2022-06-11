import { Link } from 'react-router-dom';

import styles from './HighlightedMeal.module.css';
import cookieImage from '../../../assets/cookieImage.png';

export default function HighlightedMeal({ name, price, description }) {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={cookieImage} alt="cookie image" />
                <div className={styles.content}>
                    <header>{name}</header>
                    <p>{description}</p>
                    <p>{price}$</p>
                    <div className={styles.buttons}>
                        <Link className={styles.item} to='/'>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}