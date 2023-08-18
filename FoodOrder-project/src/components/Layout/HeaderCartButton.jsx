import { useContext } from "react";
import CartIcon from "../Carts/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { ToggleButtonContext } from "../../App";
import CartContext from "../../store/CartContext";

const HeaderCartButton = () => {
  const { setShowModal } = useContext(ToggleButtonContext);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={() => setShowModal(true)}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
