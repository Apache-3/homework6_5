import { createSlice } from "@reduxjs/toolkit";
import products from "../data/index.json"

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: products,
        count: 0
    },
    reducers: {
        bayProduct: (state, action) => {
            return {...state, count: state.count + 1}
        }
    }
})

export const { bayProduct } = productsSlice.actions
export const productReducer = productsSlice.reducer