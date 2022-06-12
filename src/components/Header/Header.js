import { useContext } from 'react';

import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import MainNavigation from "./MainNavigation/MainNavigation";

import AuthContext from '../../store/auth-context';

import './Header.css';

import mealsImage from '../../assets/meals.jpg';

export default function Header({ onClickMyCart }) {
    const authContext = useContext(AuthContext);

    const userIsLoggedIn = authContext.isLoggedIn;

    return (
        <>
            <header className='header'>
                <h1>Stas_Panda</h1>
                <MainNavigation />
                {userIsLoggedIn && (<HeaderCartButton onClick={onClickMyCart} />)}
            </header>

            <div className='main-image'>
                <img src={mealsImage} alt='Image!' />
            </div>
        </>
    );
}