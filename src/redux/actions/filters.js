import {setSort, setCategory} from "../types"


export const setFilterSort = ({type, order}) => ({
   type: setSort,
   payload: {type, order}
})

export const setFilterCategory = (category) => ({
   type: setCategory,
   payload: category
})