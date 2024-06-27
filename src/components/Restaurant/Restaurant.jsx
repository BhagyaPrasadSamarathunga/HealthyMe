import React from 'react'
import style from './Restaurant.module.css';
import ShowRating from '../ShowRating/ShowRating';
function Restaurant({name, image, onClick, rating}) {
  return (
    <div onClick={onClick} className={style.restaurantItem}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <div className={style.rating}>
        <ShowRating rating={rating}/>
        </div>
    </div>
  )
}

export default Restaurant