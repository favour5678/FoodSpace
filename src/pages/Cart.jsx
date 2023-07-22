import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { items } from '../data/items';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cartItems } = useContext(ShopContext)

  return (
    <section>
      <Navbar />
      <div className='pt-28'>
        <h1>Food Items</h1>
        
        {items.map((item, index) => {
          if(cartItems[item.id] !== 0) {
            return (
              <div >
                <img src={item.image} alt="" />
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Cart;