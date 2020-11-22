import { combineReducers } from 'redux'

import pizzasReducer from "./pizzass"
import filtersReducer from './filters'
import cartReducer from "./cart"

const rootReducer = combineReducers({
   pizza: pizzasReducer,
   filters: filtersReducer,
   cart: cartReducer
})

export default rootReducer