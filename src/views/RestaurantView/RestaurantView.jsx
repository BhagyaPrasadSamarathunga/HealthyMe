import { useState, useEffect } from "react";
import Restaurant from "../../components/Restaurant/Restaurant.jsx";
import styles from "./RestaurantView.module.css";
import { useNavigate } from "react-router-dom";

const RestaurantView = ({restaurants}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleResturentClick = (name) => {
    let nextItems;

    if (selectedItems.includes(name)) {
      nextItems = selectedItems.filter((item) => item !== name);
    } else {
      nextItems = [...selectedItems, name];
    }

    setSelectedItems(nextItems);
      navigate("/foodcart");
  };

  return (
    <div className={styles.restaurantWrapper}>
      <div className={styles.menu}>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              onClick={handleResturentClick}
              rating={restaurant.rating}
            />
          ))
        ) : (
          <p>No Restaurant found :(</p>
        )} 
      </div>
    </div> 
  );
};

export default RestaurantView;
