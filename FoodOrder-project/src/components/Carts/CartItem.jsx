import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, amount, price } = props.itemData;
  const roundOffprice = `₹${price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{roundOffprice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={styles.onRemove}>−</button>
        <button onClick={styles.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
