import React from 'react'
import img from '../assets/Food/3.avif'

const FoodCard = () => {
    return (
        <div style={{ marginTop: '15px', backgroundColor: 'green', width: '300px', borderRadius: '10px' }}>
            <div style={{ backgroundColor: 'green', padding: '8px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{ width: '200px', height: '100px', cursor: 'pointer', borderRadius: '10px' }} src={img} alt="" />
            </div>
            <div style={{ backgroundColor: 'slateblue', MozBorderRadiusBottomleft: '10px', MozBorderRadiusBottomright: '10px', padding: '5px' }}>
                <div style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h6 style={{ backgroundColor: 'transparent' }}>PIZZA</h6>
                    <h6 style={{ backgroundColor: 'transparent' }}>$: 67</h6>
                </div>
                <p style={{backgroundColor:'transparent'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, in.</p>
                <div>
                    🟡
                </div>
            </div>
        </div>
    )
}

export default FoodCard