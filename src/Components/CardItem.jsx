import React from 'react'
import img from '../assets/Food/3.avif'
import './CardItem.css'
import { useDispatch } from 'react-redux'
import { decreamentItem, increaseItem, removeCard } from '../Store/CardSlice'

const CardItem = ({ id, name, image, price, qty }) => {
    const dispatch = useDispatch()
    return (
        <div className='img-bg' style={{ marginTop: '5px' }}>
            <img className='image' src={image} alt="" />
            <div className='lead' style={{ backgroundColor: 'transparent' }}>
                <h5 style={{ backgroundColor: 'transparent' }}>{name}</h5>
                <h5 style={{ backgroundColor: 'transparent' }}>$: {price}</h5>
            </div>

            <h3 style={{ backgroundColor: 'transparent', cursor: 'pointer', marginTop:'0px' }} onClick={() => dispatch(removeCard({ id }))} >😏</h3>
            <div className='add-min' style={{ backgroundColor: 'transparent', marginTop: '40px' }}>
                <h4 onClick={()=>qty > 1 ? dispatch(decreamentItem({id})) : qty = 1} style={{ backgroundColor: 'transparent', cursor: 'pointer', fontSize: '32px', }}>-</h4>
                <span style={{ backgroundColor: 'transparent' }}>{qty}</span>
                <h4 onClick={()=>dispatch(increaseItem({id}))} style={{ backgroundColor: 'transparent', cursor: 'pointer', fontSize: '32px', }}>+</h4>
            </div>
        </div>
    )
}

export default CardItem