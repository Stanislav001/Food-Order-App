import { useContext } from 'react';
import { Link } from 'react-router-dom';

import MealForm from '../MealForm/MealForm';

import CartContext from '../../../store/cart-context';
import AuthContext from '../../../store/auth-context';
import styles from './MealItem.module.css';

export default function MealItem({ id, price, name, description, isFav, changeFavorite }) {
    const cartContext = useContext(CartContext);
    const authContext = useContext(AuthContext);
    const userIsLoggedIn = authContext.isLoggedIn;

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

    function changeButtonHandler() {
        changeFavorite(id);
    }

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
                <button className={styles.formButton} onClick={changeButtonHandler}>
                    {isFav ? 'Remove from Favorites' : 'Add to Favorite'}
                </button>

                {userIsLoggedIn && <MealForm onAddToCart={addItemToCartHandler} />}
            </div>
        </li>
    )
}
