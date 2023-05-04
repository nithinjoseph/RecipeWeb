import React from 'react'

const Card = ({ item:{strMealThumb, strCategory, strMeal} }) => {
  return (
    <div className='card'>
        <img src={strMealThumb}/>
        <h3>{strMeal}</h3>
        <h2>{strCategory}</h2>
    </div>
  )
}

export default Card