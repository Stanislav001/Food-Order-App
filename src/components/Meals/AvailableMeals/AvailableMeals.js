import { useState, useEffect } from 'react';

import Card from '../../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

import { useHttp } from '../../../hooks/use-http';
import { MEAL_ULR } from '../../../resources/mealUrl';
import './AvailableMeals.css';

export default function AvailableMeals() {
    const meals = JSON.parse(localStorage.getItem('favoritesMeals'));
    const [mealsa, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    function changeToFavoriteHandler(id) {
        const currentElement = meals.find(meal => meal.id === id);

        const currentFav = currentElement.isFav
        currentElement.isFav = !currentFav;

        const updatedMeals = meals.map(meal =>
            meal.id === 1
                ? { ...meal, isFav: !currentFav }
                : meal
        );
        localStorage.setItem('favoritesMeals', JSON.stringify(updatedMeals));

        setMeals(updatedMeals);
    };

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

    content = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            isFav={meal.isFav}
            changeFavorite={changeToFavoriteHandler}
        />
    ));

    return (
        <section className='meals'>
            <Card>
                {error && errorContext}
                <ul>{content}</ul>
            </Card>
        </section>
    )
}