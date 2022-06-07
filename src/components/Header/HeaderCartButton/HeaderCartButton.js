import { useContext, useEffect, useState } from 'react';

import CartIcon from '../../../UI/CartIcon/CartIcon';
import CartContext from '../../../store/cart-context';

import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton({ onClick }) {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartContext = useContext(CartContext);
    const { items } = cartContext;

    const numberOfCartItem = cartContext.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const buttonStyles = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={buttonStyles} onClick={onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItem}</span>
        </button>
    );
};