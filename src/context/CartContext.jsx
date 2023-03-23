import React, { useState, createContext, useEffect } from 'react'

export const CartContext = createContext(null)

const CartProvider = (props) => {
  const [cart, setCart] = useState([])

  const addToCart = (item, quantity) => {
    if (cart.some((el) => el.title === item.title)) {
      let index = cart.findIndex((el) => el.title === item.title)
      let product = cart[index]
      if (product.quantity >= product.stock)
        return

      let n = 0
      while (n < quantity) {
        n++
        if (product.quantity >= product.stock)
          return
        product.quantity++
        const newCart = [...cart]
        newCart.splice(index, 1, product)
        setCart([...newCart])
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
    } else {
      let product = { ...item, quantity }
      setCart([...cart, product])
      localStorage.setItem('cart', JSON.stringify([...cart, product]))
    }
  }

  const deleteCart = () => {
    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))

  }

  const deleteItem = (title) => {
    const newCart = [...cart]
    let index = newCart.findIndex((el) => el.title === title)
    newCart.splice(index, 1)
    setCart([...newCart])
    localStorage.setItem('cart', JSON.stringify([...newCart]))

  }

  const refreshQty = (title, qty2) => {
    let index = cart.findIndex((el) => el.title === title)
    let product = cart[index]
    product.quantity = product.quantity + qty2

    const newCart = [...cart]
    newCart.splice(index, 1, product)
    setCart([...newCart])
    localStorage.setItem('cart', JSON.stringify(newCart))

  }

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('cart'))
    if (dataCart) {
      setCart(() => dataCart)
    }
  }, [])

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])



  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, deleteCart, deleteItem, refreshQty }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
