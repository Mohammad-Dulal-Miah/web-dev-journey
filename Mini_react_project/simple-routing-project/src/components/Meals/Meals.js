import React from 'react'
import './Meals.css'

const Meals = ({ meal }) => {
  const { idMeal, strArea, strMeal, strMealThumb } = meal

  return (
    <div className="meal">
      <div className="meal-information">
        <img src={strMealThumb} alt="" style={{ width: '100px' }} />
        <h3>{strMeal}</h3>
        <p>{strArea}</p>
      </div>
    </div>
  )
}

export default Meals
