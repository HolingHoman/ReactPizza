import React from 'react'

import {useSelector, useDispatch} from 'react-redux'


import {minusPizzaFromCart, deletePizzaFromCart, plusPizzaFromCart, clearALlCart} from '../redux/actions/cart'
import {CartEmpty, CartItems} from '../components'

const Cart = () => {

  const dispatch = useDispatch()
  const {pizzasItems, totalPrice, totalCount} = useSelector(({cart}) => cart)

  const handlerMinusPizza = (id) => {
    dispatch(minusPizzaFromCart(id))
  }

  const handlerPlusPizza = (id) => {
    dispatch(plusPizzaFromCart(id))
  }

  const handlerDeletePizza = (id) => {
    dispatch(deletePizzaFromCart(id))
  }

  const handlerClearCart = () => {
    dispatch(clearALlCart())
  }

  return (
    <div className="container container--cart">
      {
        !Object.keys(pizzasItems).length
         ? <CartEmpty />
         : <CartItems
              pizzasItems={pizzasItems}
              totalPrice={totalPrice}
              totalCount={totalCount}
              onPlusPizza={handlerMinusPizza}
              onMinusPizza={handlerPlusPizza}
              onDeletePizza={handlerDeletePizza}
              onClearCart={handlerClearCart}
           />
      }
    </div>
  )
}

export default Cart