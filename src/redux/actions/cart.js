import {addItemToCart, clearCart, deletePizza, minusPizza, plusPizza} from '../types'

export const addItemCart = (item) => ({
   type: addItemToCart,
   item
})

export const deletePizzaFromCart = (id) => ({
   type: deletePizza,
   payload: id
})

export const minusPizzaFromCart = (id) => ({
   type: minusPizza,
   payload: id
})

export const plusPizzaFromCart = (id) => ({
   type: plusPizza,
   payload: id
})

export const clearALlCart = () => ({
   type: clearCart
})