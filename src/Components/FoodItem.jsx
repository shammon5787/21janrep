import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/Data/FoodData'
import './FoodItem.css'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state) => state.category.category)
  return (
    <div className='display'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food
          } else {
            return category === food.category
          }
        }).map((food) => {
          return (
            <FoodCard key={food.id} id={food.id} name={food.name} price={food.price} rating={food.ratting} image={food.image} desc={food.desc} />
          )
        })
      }

    </div>
  )
}

export default FoodItem