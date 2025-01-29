import React from 'react'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div style={{marginTop:'50px', padding:'30px'}}>
        <CategoryMenu />
        <FoodItem />
        <Card />
    </div>
  )
}

export default Home