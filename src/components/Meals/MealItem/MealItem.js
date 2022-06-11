import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../../store/cart-context';
import MealForm from '../MealForm/MealForm';

import styles from './MealItem.module.css';

export default function MealItem({ id, price, name, description }) {
    const cartContext = useContext(CartContext);

    const inputPrice = `${price.toFixed(2)}$`;

    const addItemToCartHandler = (amount) => {
        const newItem = {
            id,
            name,
            amount: amount,
            price
        };

        cartContext.addItem(newItem);
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.price}>{inputPrice}</div>
                <div className={styles.actions}>
                    <Link className={styles.formButton} to={`/meals/${id}`}>View Details</Link>
                </div>
            </div>
            <div>
                <MealForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
}
