import React, { useReducer, useEffect, useContext } from 'react'
import { createContext } from 'react'
import fetchAllProducts from './Api';
import { productReducer } from './Reducer';

const Product = createContext();

const Context = ({ children }) => {


    useEffect(() => {
        const data = fetchAllProducts()
        data.then((res) => {
            res = res.splice(0, 5)
            res = res.map((item) => {
                return {
                    ...item,
                    qty: 5
                }
            })
            dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: res
            })
        })

        // eslint-disable-next-line
    }, [])

    const [state, dispatch] = useReducer(productReducer, { products: [], byStock: false });

    return (
        <Product.Provider value={{ state, dispatch }}>
            {children}
        </Product.Provider>

    )

}

export const ProductState = () => {
    return useContext(Product);
};

export default Context
