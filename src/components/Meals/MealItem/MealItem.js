import { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import MealForm from '../MealForm/MealForm';

import './MealItem.css';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    const price = `${props.price.toFixed(2)}$`;

    const addItemToCartHandler = (amount) => {
        const newItem = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        };

        cartContext.addItem(newItem);
    };

    return (
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>
                    {props.description}
                </div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MealForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;