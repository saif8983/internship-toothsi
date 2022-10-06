import {
    configureStore
} from "@reduxjs/toolkit"
const initia_State = {
    products: [],
    valueOfCategory: []
    , 
    valueOfSize: [],
    valueOfSearch:[],
    inputSearch: []
    , Addproducts: []
    , AddCartData: []
}

const store = configureStore({
    reducer: (state, action) => {
        console.log(state)
        const {
            type,
            payload,
        } = action
        switch (type) {
            case 'let search':
                return {
                    ...state,
                    valueOfSearch: payload.searchValue,
                }
            case 'curValue':
                return {
                    ...state,
                    inputSearch: payload.curVal
                }
            case 'category':
                return {
                    ...state,
                    valueOfCategory: payload.categoryValue
                }
            case 'size':
                return {
                    ...state,
                    valueOfSize: payload.sizeValue
                }
            case 'let addtocart':
                return {
                    ...state,
                    products: [...state.products,...payload.productsData]
                }
            case 'let product':
                console.log(payload.data)
                
                return {
                    ...state,
                    Addproducts: [...state.Addproducts.filter(item=>item.id!==payload.data.id),{...payload.data}]
                }
                case 'let uncheckproduct':
                    const {
                        data
                    }= payload
                    console.log(data)
                    return {
                        ...state,
                        Addproducts:[...state.Addproducts.filter(item=>item.id!==data.id)]
                    }
            case 'addcart value':
                const {
                    product
                } = payload
                console.log(state)
                return {
                    ...state
                    , AddCartData: [...state.AddCartData.filter(item=>item.id!==product.id), {...product,quantity:1}]
                }
            case 'all products':
                return {
                    ...state,
                    value: payload.All
                }
                case 'update_cart':
                  const  {cartProduct}=payload
                  console.log(cartProduct)
                    return{
                    ...state,
                        products:cartProduct

                    }
                    case 'remove_cart':
                        const {removeProduct}=payload
                        return {...state,
                            products:[...state.products.filter(item=> item!==removeProduct)]}
            default:
                return initia_State
        }
    }
})
export default store
