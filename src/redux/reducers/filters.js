import { setSort, setCategory } from '../types'

const initialState = {
   activeSort: {
      type: 'popular',
      order: 'desc',
   },
   activeCategory: null
}

const filters = (state = initialState, action) => {
   switch (action.type){
      case setSort:
         return {
            ...state,
            activeSort: action.payload
         }
      case setCategory:
         return {
            ...state,
            activeCategory: action.payload
         }
      default:
         return {
            ...state
         }
   }
}

export default filters