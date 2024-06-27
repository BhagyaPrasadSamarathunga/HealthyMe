import styles from "./Cart.module.css";
import shoppingCart from "./../../assets/shoppingCart.svg";
import { useState } from "react";

const Cart = ({ selectedItems, onClear }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCartVisibility = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.cart} onClick={handleToggleCartVisibility}>
      <img src={shoppingCart} alt="Shopping Cart" width={25} />
      <div className={styles.numberOfItems}>{selectedItems.length}</div>

      {isCartOpen && (
        <div
          className={styles.dropDown}
          onMouseLeave={handleToggleCartVisibility}
        >
          {selectedItems.length > 0 ? (
            <>
              <ul>
                {selectedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button onClick={onClear} className={styles.clearButton}>
                CLEAR
              </button>
            </>
          ) : (
            <>Nothing is selected yet</>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
