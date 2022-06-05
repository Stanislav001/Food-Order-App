import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = (props) => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />
        </>
    )
}

export default Meals;