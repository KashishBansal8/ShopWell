import { createSlice } from "@reduxjs/toolkit";
import ProductListJson from "../utils/ProductList.json";

const productSlice = createSlice({
    name: "Products",
    initialState: {
        products: ProductListJson,
        allConstantProducts: ProductListJson
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;