export const productReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'INCREASE_QTY':
            return {
                products: state.products.map((product) => product.id === action.payload.id ? {
                    ...product,
                    qty: product.qty + 1
                } : product)
            }
        case 'DECREASE_QTY':
            return {
                products: state.products.map((product) => product.id === action.payload.id ? {
                    ...product,
                    qty: product.qty - 1
                } : product)
            }
        case 'BY_STOCK':
            return {
                ...state,
                byStock: action.payload
            }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                byStock: false
            }

        default:
            return state;
    }
}



