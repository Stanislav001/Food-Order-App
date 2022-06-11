import { useEffect, useState } from 'react';

import { useHttp } from '../../../hooks/use-http';

import MealItem from '../MealItem/MealItem';
import Card from '../../../UI/Card/Card';

import { MEAL_ULR } from '../../../resources/mealUrl';
import './AvailableMeals.css';

export default function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    useEffect(() => {
        const transformTasks = (meal) => {
            const loadedMeals = [];

            for (const key in meal) {
                loadedMeals.push({ id: key, name: meal[key].name, price: meal[key].price, description: meal[key].description });
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