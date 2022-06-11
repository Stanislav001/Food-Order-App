import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { useHttp } from '../../hooks/use-http';
import { MEAL_ULR } from '../../resources/mealUrl';

import HighlightedMeal from '../../components/Meals/HighlightedMeal/HighlightedMeal';

export default function MealDetail() {
    const [meal, setMeal] = useState([]);
    const [meals, setMeals] = useState([]);

    const { isLoading, error, sendRequest: fetchMeals } = useHttp();
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const transformTasks = (meal) => {
            const loadedMeals = [];

            for (const key in meal) {
                loadedMeals.push({ id: key, name: meal[key].name, price: meal[key].price, description: meal[key].description });

                if (key === id) {
                    console.log('test if');
                    const res = { id: key, name: meal[key].name, price: meal[key].price, description: meal[key].description };
                    setMeal(res);
                }
            }

            setMeals(loadedMeals);
        };

        fetchMeals(
            { url: MEAL_ULR },
            transformTasks
        );

    }, [fetchMeals]);

    return (
        <HighlightedMeal name={meal.name} price={meal.price} description={meal.description} />
    );
}