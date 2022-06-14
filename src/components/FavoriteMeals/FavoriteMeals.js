import { useState, useEffect } from 'react';

import FavoriteItem from './FavItem/FavoriteItem';

import { useHttp } from '../../hooks/use-http';
import { MEAL_ULR } from '../../resources/mealUrl';
import styles from './FavoriteMeals.module.css';

export default function FavoritesMeals() {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    useEffect(() => {
        const transformTasks = (meal) => {
            const loadedMeals = [];

            for (const key in meal) {
                loadedMeals.push({ id: key, name: meal[key].name, price: meal[key].price, description: meal[key].description, isFav: meal[key].isFav });
            }
            setMeals(loadedMeals);
        };

        fetchMeals(
            { url: MEAL_ULR },
            transformTasks
        );
    }, [fetchMeals]);

    let errorContext;
    let content;
    if (error) {
        console.log(error);
        errorContext = <p>{error}</p>
    }

    if (isLoading) {
        content = 'Loading all meals';
    }

    const filteredMeals = meals.filter(meal => meal.isFav === true);

    content = filteredMeals.map((meal) => (
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