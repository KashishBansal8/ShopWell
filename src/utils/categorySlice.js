import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "Category",
    initialState: {
        selectedCategory: "",
        categoryProductList: [],
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setSelectedCategoryProductList: (state, action) => {
            state.categoryProductList.push(action.payload);
        }
    }
})

export const { setSelectedCategory, setSelectedCategoryProductList } = categorySlice.actions;
export default categorySlice.reducer;