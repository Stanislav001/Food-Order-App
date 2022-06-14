import { Link } from 'react-router-dom';

import styles from './FavoriteItem.module.css';

export default function FavoriteItem({ id, name, description, inputPrice }) {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.price}>{inputPrice}</div>
            </div>
            <div>
                <Link className={styles.formButton} to={`/meals/${id}`}>View Details</Link>
            </div>
        </li>
    )
}