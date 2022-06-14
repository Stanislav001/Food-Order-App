import FavoriteItem from './FavItem/FavoriteItem';

import styles from './FavoriteMeals.module.css';

export default function FavoritesMeals() {
    const meals = JSON.parse(localStorage.getItem('favoritesMeals'));
    const favoritesMeals = meals.filter(meal => meal.isFav === true);

    console.log(meals);
    console.log(favoritesMeals);
    const content = favoritesMeals.map((meal) => (
        <FavoriteItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            isFav={meal.isFav}
        />
    ));

    return (
        <div >
            <h1 className={styles.favoriteTitle}>My Favorites meals</h1>
            <section className='meals'>
                <ul>{content}</ul>
            </section>
        </div>

    )
}