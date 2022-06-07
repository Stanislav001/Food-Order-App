import { useState, useRef } from 'react';

import Input from '../../../UI/Input/Input';

import './Input.css';
import './MealForm.css';

export default function MealForm({ onAddToCart }) {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const inputAmountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const inputAmount = inputAmountRef.current.value;
        const convertedInputAmount = Number(inputAmount);

        if (inputAmount.trim().length === 0 || convertedInputAmount < 1 || convertedInputAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(convertedInputAmount);
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <Input
                ref={inputAmountRef}
                label='Amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+Add</button>

            {!amountIsValid && <p>Enter amount in range (1-5)</p>}
        </form>
    )
}