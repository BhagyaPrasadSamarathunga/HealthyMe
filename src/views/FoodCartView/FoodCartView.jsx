import { useState } from "react";
import rawDishes from "../../mocks/dishes.json";
import styles from "./FoodCartView.module.css";
import MenuItem from "../../components/MenuItem/MenuItem.jsx"

const FoodCartView = ({dishes, onClick}) => {
  return (
    <>
      <div className={styles.FoodCartViewWrapper}>
        <div className={styles.menu}>
          {dishes.length > 0 ? (
            dishes.map((dish) => (
              <MenuItem
                key={dish.id}
                id={dish.id}
                name={dish.name}
                image={dish.image}
                calories={dish.calorie}
                onClick={onClick}
                isSelected={false}
              />
            ))
          ) : (
            <p>No dishes found :(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodCartView;
