import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import MainNavigation from "./MainNavigation/MainNavigation";

import './Header.css';

import mealsImage from '../../assets/meals.jpg';

export default function Header({ onClickMyCart }) {
    return (
        <>
            <header className='header'>
                <h1>Stas_Panda</h1>
                <MainNavigation />
                <HeaderCartButton onClick={onClickMyCart} />
            </header>

            <div className='main-image'>
                <img src={mealsImage} alt='Image!' />
            </div>
        </>
    );
}