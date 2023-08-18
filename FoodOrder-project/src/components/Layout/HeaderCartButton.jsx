import { useContext, useEffect, useState } from "react";
import CartIcon from "../Carts/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { ToggleButtonContext } from "../../App";
import CartContext from "../../store/CartContext";

const HeaderCartButton = () => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  const { setShowModal } = useContext(ToggleButtonContext);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={() => setShowModal(true)}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
