import axios from 'axios'

import {setLoadedPizzas, setPizzasItems} from '../types'

export const setLoaded = (payload) => ({
   type: setLoadedPizzas,
   payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
   dispatch(setLoaded(true))

   axios.get(`/pizzas?${category !== null ? `category=${category}&` : ''}_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(({data}) => {
         dispatch(setPizzas(data))
      })

}

export const setPizzas = (items) => ({
   type: setPizzasItems,
   items
})