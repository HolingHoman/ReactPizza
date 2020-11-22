import React from 'react'




const TypeNav = React.memo(function ( { pizzaTypes, handlerChangeCategory, activeCategory } ) {
   return (
      <ul>
         <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => handlerChangeCategory(null)}
         >Все</li>
         {
            pizzaTypes.map((el, index) => {
               return (
                  <li
                     className={activeCategory === index ? 'active' : ''}
                     onClick={() => handlerChangeCategory(index)}
                     key={`${el}_${index}`}
                  >{el}</li>
               )
            })
         }
      </ul>
   )
})

export default TypeNav