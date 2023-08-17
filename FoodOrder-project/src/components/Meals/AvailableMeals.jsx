import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem.jsx";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 220.99,
  },
  {
    id: "m2",
    name: "Ritual Thali",
    description: "A Indian specialty!",
    price: 550.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Indian, raw, meaty",
    price: 850.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 480.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meals) => {
            return <MealItem key={meals.id} mealData={meals} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
