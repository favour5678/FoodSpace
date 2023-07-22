import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { items } from '../data/items';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateItemCartAmount, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <section>
      <Navbar />
      <div className='pt-[105px]'>
        <h1 className='text-center text-2xl font-bold'>Food Items</h1>
        <div className='container mx-auto mt-10 w-4/5 space-y-5'>
          {items.map((item, index) => {
            if(cartItems[item.id] !== 0) {
              return (
                <div key={index} className='flex justify-between items-center'>
                    <img src={item.image} alt={item.name} className='w-48 h-40 rounded-lg object-cover'/>
                    <p className='text-lg font-semibold'>{item.name}</p>
                    <p className='font-semibold'>{item.category }</p>
                    <p className='font-semibold tracking-wide'>#{item.price}</p>
                    <p className='flex items-center'>
                      <button onClick={() => removeFromCart(item.id)} className='bg-gray-400 px-[6px] w-[19px] rounded-sm font-semibold'>-</button>
                      <input onChange={e => updateItemCartAmount((e.target.value), item.id)} type="number" className='w-1/4 outline-none border rounded text-center' value={cartItems[item.id]}/>
                      <button onClick={() => addToCart(item.id)} className='bg-gray-400 px-[4px] text-center rounded-sm font-semibold'>+</button>
                    </p>
                </div>
              )
            }
          })}
          {totalAmount > 0 ? 
            <main>
              <div className='border-t border-black w-[100%] mx-auto'></div>
              <div>
                <p className='font-semibold mb-1'>SubTotal: #{totalAmount}</p>
                <Link to={'/heroPage'} className='bg-gray-800 px-2 py-1 rounded text-white text-sm'>
                  <button>Continue Shopping</button>
                </Link>
              </div> 
            </main> 
        : <h1 className='text-center text-2xl font-bold'>Food Items Cart is Empty</h1>}
        </div>
      </div>
    </section>
  )
}

export default Cart;