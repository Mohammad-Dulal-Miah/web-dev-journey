import React, { useEffect, useRef, useState } from 'react'
import Meals from '../Meals/Meals';
import './Search.css';

const Search = () => {
  const inputRef = useRef(null)
  const [name, setName] = useState('')
  const [allFood, setAllFood] = useState([])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => res.json())
      .then((data) => setAllFood(data.meals))
      .catch((err) => {
        console.log(err)
      })
  }, [name])

  const searchFood = (e) => {
    e.preventDefault()

    setName(e.target.name.value)
  }

  console.log(allFood)

  return (
    <div>
      <h1 className="text-success">Welcome Meal Bangladesh</h1>
      <p>
        <small className="text-danger" style={{ fontWeight: 'bold' }}>
          Find Your meal in one click
        </small>
      </p>
      <form onSubmit={searchFood}>
        <input
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Enter your food Name"
          required
        />
        <br />
        <input
          type="submit"
          className="btn btn-dark text-white mt-3"
          value="Submit"
        />
      </form>
      <div className='meals-container container'>
        {(allFood !== null)?allFood.map((meal) => (
          <Meals meal={meal} key={meal.idMeal} />
        )):<div><h2 className='center'>Not Found</h2></div>}
      </div>
    </div>
  )
}

export default Search
