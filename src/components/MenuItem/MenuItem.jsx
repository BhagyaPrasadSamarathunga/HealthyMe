import React from 'react';
import styles from "./MenuItem.module.css";
import Button from "../Button/Button.jsx"

function MenuItem({name, image, onClick, isSelected, calories}) {
  const handelItemAdd = () =>{
    console.log("KilloJ==>",calories);
    onClick(calories);
  }
    return (
        <div className={styles.menuItem}>
          <h3>{name}</h3>
          <img src={image} alt={name} />
          <Button onClick={handelItemAdd} isSelected={isSelected} name={name}>
            {isSelected ? "Remove From Cart" : "Add To Cart"}
          </Button>
        </div>
      );
}

export default MenuItem