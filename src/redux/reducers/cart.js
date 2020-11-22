import {addItemToCart, clearCart, deletePizza, minusPizza, plusPizza} from '../types'

const initialState = {
   pizzasItems: {},
   totalPrice: 0,
   totalCount: 0
}

const getTotalSum = (arr) => arr.reduce((sum,obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case addItemToCart:
         const {id} = action.item

         const currentPizzaItems = !state.pizzasItems[id]
            ? [action.item]
            : [...state.pizzasItems[id].items, action.item]
         const newPizzaItems = {
            ...state.pizzasItems,
            [id]: {
               items: currentPizzaItems,
               totalPrice: getTotalSum(currentPizzaItems)
            }
         }

         return {
            ...state,
            pizzasItems: newPizzaItems,
            totalPrice: state.totalPrice + action.item.price,
            totalCount: state.totalCount + 1
         }
      case clearCart:
         return {
            ...state,
            pizzasItems: {},
            totalPrice: 0,
            totalCount: 0
         }
      case minusPizza:

         const oldItems = state.pizzasItems[action.payload].items

         const newItems =
            oldItems.length > 1 ? oldItems.slice(1) : oldItems

         const newObjItems = {
            ...state.pizzasItems,
            [action.payload]: {
               items: newItems,
               totalPrice: getTotalSum(newItems)
            }
         }

         return {
            ...state,
            pizzasItems: newObjItems,
            totalPrice: oldItems.length > 1 ? state.totalPrice - oldItems[0].price : state.totalPrice,
            totalCount: oldItems.length > 1 ? state.totalCount - 1 : state.totalCount,
         }
      case plusPizza:{
         const newItems = [
            ...state.pizzasItems[action.payload].items,
            state.pizzasItems[action.payload].items[0]
         ]

         const newPizzasItems = {
            ...state.pizzasItems,
            [action.payload]: {
               items: newItems,
               totalPrice: getTotalSum(newItems)
            }
         }

         return {
            ...state,
            pizzasItems: newPizzasItems,
            totalPrice: state.totalPrice + newItems[0].price,
            totalCount: state.totalCount + 1,
         }
      }
      case deletePizza: {
         const newPizzaItems = {
            ...state.pizzasItems
         }

         const totalPrice = newPizzaItems[action.payload].totalPrice
         const totalCount = newPizzaItems[action.payload].items.length

         delete newPizzaItems[action.payload]

         return {
            ...state,
            pizzasItems: newPizzaItems,
            totalPrice: state.totalPrice - totalPrice,
            totalCount: state.totalCount - totalCount
         }
      }
      default:
         return {
            ...state
         }
   }
}

export default cartReducer