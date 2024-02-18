import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";

const appStore = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer
    }
});

export default appStore;