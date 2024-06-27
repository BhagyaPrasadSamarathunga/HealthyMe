import React from 'react';
import Star from '../../assets/star.png';
import style from './ShowRating.module.css';

function ShowRating({rating}) {
  return (
    <div className={style.rating}>
      {Array.from({length:rating}).map((_item, index) =>  <img className={style.star} src={Star} alt={`star${_item}`} key={index}/>)}
    </div>
  )
}

export default ShowRating