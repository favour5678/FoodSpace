import React, { createContext, useState } from 'react'
import { items } from '../data/items'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < items.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems(prevItem => (
            {...prevItem, [itemId]: prevItem[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems(prevItem => (
            {...prevItem, [itemId]: prevItem[itemId] - 1 }))
    }

    const updateItemCartAmount = (newAmount, itemId) => {
        setCartItems(prevItem => ({ ...prevItem, [itemId]: newAmount }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = items.find(i => i.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateItemCartAmount,
        getTotalCartAmount
    }

    console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}