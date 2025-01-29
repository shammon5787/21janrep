import React from 'react'
import img from '../assets/Food/3.avif'
import { useDispatch } from 'react-redux'
import { addCard } from '../Store/CardSlice'

const FoodCard = ({id, name, price, image, desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <div style={{ marginTop: '15px', backgroundColor: 'green', width: '300px', borderRadius: '10px' }}>
            <div style={{ backgroundColor: 'green', padding: '8px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{ width: '200px', height: '100px', cursor: 'pointer', borderRadius: '10px' }} src={image} alt="" />
            </div>
            <div style={{ backgroundColor: 'slateblue', MozBorderRadiusBottomleft: '10px', MozBorderRadiusBottomright: '10px', padding: '5px' }}>
                <div style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h6 style={{ backgroundColor: 'transparent' }}>{name}</h6>
                    <h6 style={{ backgroundColor: 'transparent' }}>$: {price}</h6>
                </div>
                <p style={{ backgroundColor: 'transparent' }}>{desc}.</p>
                <div style={{ backgroundColor: 'transparent', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <h3 style={{ backgroundColor: 'transparent' }}>🟡</h3>
                        <h3 style={{ backgroundColor: 'transparent' }}>{rating}</h3>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, image, price, qty : 1}))} style={{ fontSize: '22px', cursor: 'pointer', borderRadius: '4px' }}>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard