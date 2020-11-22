import { setPizzasItems, setLoadedPizzas } from '../types'

const initialState = {
   items: [],
   loaded: true,
}

const pizzasReducer = (state = initialState, action) => {
   switch (action.type){
      case setPizzasItems:
         return {
            ...state,
            items: action.items,
            loaded: false
         }
      case setLoadedPizzas:
         return {
            ...state,
            loaded: action.payload
         }
      default:
         return {
            ...state
         }
   }
}

export default pizzasReducer