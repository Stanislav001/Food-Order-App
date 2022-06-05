import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

import './Header.css';

import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return (
        <>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt='Image!' />
            </div>
        </>
    );
}

export default Header;