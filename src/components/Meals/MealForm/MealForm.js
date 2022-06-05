import Input from '../../../UI/Input/Input';

import './Input.css';
import './MealForm.css';

const MealForm = (props) => {
    return (
        <form className='form'>
            <Input
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
        </form>
    )
}

export default MealForm;