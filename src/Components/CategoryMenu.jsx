import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    const ListUniqueCategory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setCategories(uniqueCategory)
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Order Your Favorite Food</h1>
            <div style={{display:'flex', alignItems:'center', gap:'6px', overflowX:'scroll'}}>
            <button onClick={()=>dispatch(addCategory("All"))} style={{ fontSize: '22px', cursor: 'pointer', borderRadius: '4px' }}>All</button>
                {
                    categories.map((category, i) => {
                        return (
                            <button onClick={()=>dispatch(addCategory(category))} key={i} style={{ fontSize: '22px', cursor: 'pointer', borderRadius: '4px' }}>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu