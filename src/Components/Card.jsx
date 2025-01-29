// import React, { useState } from 'react';
// import './Card.css';
// import CardItem from './CardItem';
// import { useSelector } from 'react-redux';

// const Card = () => {
//   const [activeCard, setActiveCard] = useState(true);
//   const [shopcart, setShopcart] = useState(true);

//   const selectItem = useSelector((state) => state.cart.cart)

//   // if(!activeCard) return null

//   return (
//     <>
//       {activeCard && (
//         <div className="Card">
//           <div style={{
//             backgroundColor: 'transparent',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between'
//           }}>
//             <h2 style={{ backgroundColor: 'transparent' }}>Your Orders</h2>
//             <h2
//               onClick={() => setActiveCard(!true)} // Only hides the card, not the shopcart
//               style={{ backgroundColor: 'transparent', cursor: 'pointer' }}>
//               ❌
//             </h2>
//           </div>
//           {
//             selectItem.map((item)=>{
//               return(
//                 <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
//               )
//             })
//           }
//           <div style={{
//             backgroundColor: 'transparent',
//             position: 'absolute',
//             bottom: '40px'
//           }}>
//             <h4 style={{ backgroundColor: 'transparent' }}>Total Items: 0</h4>
//             <h4 style={{ backgroundColor: 'transparent' }}>Total Price: 0</h4>
//             <hr />
//             <button style={{
//               fontSize: '22px',
//               cursor: 'pointer',
//               borderRadius: '4px',
//               width: '400px'
//             }}>
//               Check Out
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Always show the shopping cart */}
//       `{shopcart && (
//         <div>
//           <h1
//             className="Shop-card"
//             onClick={() => setActiveCard(true)} // Clicking the cart shows the card again
//             style={{ cursor: 'pointer' , }}>
//             🛒
//           </h1>
//         </div>
//       )}`
//     </>
//   );
// };

// export default Card;


import React, { useState, useEffect } from 'react';
import './Card.css';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
  const [activeCard, setActiveCard] = useState(true);
  const [isBouncing, setIsBouncing] = useState(false); // Controls bounce effect

  const selectItem = useSelector((state) => state.cart.cart);
  const totalitem = selectItem.reduce((totalitem , item)=>totalitem + item.qty, 0)

  // If there are items, start bouncing; if empty, stop bouncing
  useEffect(() => {
    setIsBouncing(selectItem.length > 0);
  }, [selectItem]);

  return (
    <>
      {activeCard && (
        <div className="Card">
          <div style={{
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h2 style={{ backgroundColor: 'transparent' }}>Your Orders</h2>
            <h2
              onClick={() => setActiveCard(false)} // Close the card
              style={{ backgroundColor: 'transparent', cursor: 'pointer' }}>
              ❌
            </h2>
          </div>
          {selectItem.map((item) => (
            <CardItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty} />
          ))}
          <div style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: '40px'
          }}>
            <h4 style={{ backgroundColor: 'transparent' }}>Total Items: {totalitem}</h4>
            <h4 style={{ backgroundColor: 'transparent' }}>Total Price: ${selectItem.reduce((total, item) => total + item.price * item.qty, 0)}</h4>
            <hr />
            <button style={{
              fontSize: '22px',
              cursor: 'pointer',
              borderRadius: '4px',
              width: '400px'
            }}>
              Check Out
            </button>
          </div>
        </div>
      )}

      {/* Shopping Cart (🛒) with Continuous Bounce Effect */}
      <div>
        <h1
          className={`Shop-card ${isBouncing ? 'bounce' : ''}`} // Apply bounce class
          onClick={() => setActiveCard(true)} // Clicking the cart shows the card again
          style={{ cursor: 'pointer' }}>
          🛒
        </h1>
      </div>
    </>
  );
};

export default Card;
