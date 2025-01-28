import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    const ListUniqueCategory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setCategories(uniqueCategory)
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])
    return (
        <div>
            <h1>Order Your Favorite Food</h1>
            <div style={{display:'flex', alignItems:'center', gap:'6px', overflowX:'scroll'}}>
                {
                    categories.map((category, i) => {
                        return (
                            <button key={i} style={{ fontSize: '22px', cursor: 'pointer', borderRadius: '4px' }}>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu