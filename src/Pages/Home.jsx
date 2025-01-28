import React from 'react'
import CategoryMenu from '../Components/CategoryMenu'
import FoodCard from '../Components/FoodCard'

const Home = () => {
  return (
    <div style={{marginTop:'50px', padding:'30px'}}>
        <CategoryMenu />
        <FoodCard />
    </div>
  )
}

export default Home