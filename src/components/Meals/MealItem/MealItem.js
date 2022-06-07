import { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import MealForm from '../MealForm/MealForm';

import './MealItem.css';

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
        <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>
                    {description}
                </div>
                <div className='price'>{inputPrice}</div>
            </div>
            <div>
                <MealForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
}
