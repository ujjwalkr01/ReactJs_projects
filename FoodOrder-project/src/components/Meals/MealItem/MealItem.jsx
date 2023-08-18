import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const { id, name, description, price } = props.mealData;
  const roundOffPrice = `₹${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{roundOffPrice}</div>
      </div>
      <div>
        <MealItemForm idValue={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
