import React from 'react'
import {useDispatch, useSelector} from "react-redux"

import {TypeNav, TypeSort, PizzaLoader, PizzaBlock} from './../components'
import { fetchPizzas } from '../redux/actions/pizzass'
import { setFilterCategory, setFilterSort } from '../redux/actions/filters'

const pizzaTypes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const pizzaSortTypes = [
   { name: 'популярности', type: 'popular', order: 'desc' },
   { name: 'цене', type: 'price', order: 'desc' },
   { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {
   const dispatch = useDispatch()
   const items = useSelector(( { pizza } ) => pizza.items)
   const loaded = useSelector(( { pizza } ) => pizza.loaded)
   const cartItems = useSelector(( { cart } ) => cart.pizzasItems)
   const {activeSort, activeCategory} = useSelector(({ filters }) => filters)

   React.useEffect(() => {
      dispatch(fetchPizzas(activeSort, activeCategory))
   }, [activeSort, activeCategory])

   const handlerChangeSortType = React.useCallback((sort) => {
      dispatch(setFilterSort(sort))
   }, [])

   const handlerChangeCategory = React.useCallback((index) => {
      dispatch(setFilterCategory(index))
   }, [])

   return (
      <div className="container">
         <div className="content__top">
            <div className="categories">
               <TypeNav pizzaTypes={pizzaTypes} handlerChangeCategory={handlerChangeCategory} activeCategory={activeCategory}/>
            </div>
            <TypeSort pizzaSortTypes={pizzaSortTypes} handlerChangeSortType={handlerChangeSortType} activeSort={activeSort.type}/>
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               !loaded && items
                  ?
                  items.map((el, index) => {
                     return (
                        <PizzaBlock addedCount={cartItems[el.id] && cartItems[el.id].items.length} key={`${el.id}_${index}`} {...el} dispatch={dispatch} />
                     )
                  })
                  : Array(10).fill(0).map( (_,index) => {
                     return (
                        <PizzaLoader key={index}/>
                     )
                  })
            }
         </div>
      </div>
   )
}

export default Home