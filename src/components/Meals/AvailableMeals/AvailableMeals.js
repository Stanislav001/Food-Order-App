import { useEffect, useState } from 'react';

import { useHttp } from '../../../hooks/use-http';

import MealItem from '../MealItem/MealItem';
import Card from '../../../UI/Card/Card';

import './AvailableMeals.css';

const baseUrl = 'https://foodorderapplication-8ddc6-default-rtdb.firebaseio.com/meals.json';

export default function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    useEffect(() => {
        const transformTasks = (movie) => {
            const loadedMeals = [];

            for (const key in movie) {
                loadedMeals.push({ id: key, name: movie[key].name, price: movie[key].price, description: movie[key].description });
            }
            setMeals(loadedMeals);
        };

        fetchMeals(
            { url: baseUrl },
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