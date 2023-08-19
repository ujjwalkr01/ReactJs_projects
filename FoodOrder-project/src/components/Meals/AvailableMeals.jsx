import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem.jsx";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState("");

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://food-order-http-8f1a2-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      // console.log(data);
      let loadedMealsData = [];

      for (const key in data) {
        loadedMealsData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMealsData);
    } catch (err) {
      console.error(err.msg);
      setHttpError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <>
      {isLoading && (
        <section className={styles.mealsLoading}>
          <p>Loading...</p>
        </section>
      )}
      {httpError && (
        <section className={styles.mealsError}>
          <p>{httpError}</p>
        </section>
      )}

      {!isLoading && !httpError && (
        <section className={styles.meals}>
          <Card>
            <ul>
              {meals.map((meals) => {
                return <MealItem key={meals.id} mealData={meals} />;
              })}
            </ul>
          </Card>
        </section>
      )}
    </>
  );
};

export default AvailableMeals;
