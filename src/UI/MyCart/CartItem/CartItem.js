import styles from './CartItem.module.css';

export default function CartItem({ name, price, amount, onRemove, onAdd }) {
    const displayPrice = `$${price}`;

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{displayPrice}</span>
                    <span className={styles.amount}>x {amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};