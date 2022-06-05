import MealForm from '../MealForm/MealForm';

import './MealItem.css';

const MealItem = (props) => {
    return (
        <div>
            <li className='meal'>
                <div>
                    <h3>{props.name}</h3>
                    <div className='description'>{props.description}</div>
                    <div className='price'>{props.price}</div>
                </div>
                <div>
                    <MealForm id={props.id} />
                </div>
            </li>
        </div>
    )
}

export default MealItem;