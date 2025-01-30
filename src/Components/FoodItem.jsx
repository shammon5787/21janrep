import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/Data/FoodData'
import './FoodItem.css'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state)=>state.search.search)
  return (
    <div className='display'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase())
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
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