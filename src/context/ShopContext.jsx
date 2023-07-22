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

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart
    }

    const addToCart = (itemId) => {
        setCartItems(prevItem => (
            {...prevItem, [itemId]: prevItem[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems(prevItem => (
            {...prevItem, [itemId]: prevItem[itemId] - 1 }))
    }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}