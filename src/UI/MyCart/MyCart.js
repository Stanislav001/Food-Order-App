import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';

import Modal from '../Modal/Modal';
import './MyCart.css';

const MyCart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `${cartContext.totalAmount.toFixed(2)}$`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {

    };

    const cartItemAddHandler = (item) => {

    };


    const cartItems = (
        <ul className='cart-items'>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.key}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler}
                    onAdd={cartItemAddHandler}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className='button'>Order</button>}
            </div>
        </Modal>
    );
}
export default MyCart;