import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constaent"

export const productList = () => {
  
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch =(query)=>{
    return{
        type: SEARCH_PRODUCT,
        query
    }
}