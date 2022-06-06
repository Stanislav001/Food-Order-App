import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

import './Header.css';

import mealsImage from '../../assets/meals.jpg';

export default function Header(props) {
    return (
        <>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onClickMyCart} />
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt='Image!' />
            </div>
        </>
    );
}