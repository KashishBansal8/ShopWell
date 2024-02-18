import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import { setProducts } from "../../utils/productSlice";
import { setSelectedCategoryProductList } from "../../utils/categorySlice";

const images = [
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
    "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
]

const Categories = () => {
    const allProductList = useSelector((store) => store.product.allConstantProducts);
    const dispatch = useDispatch();

    const categorySet = new Set(allProductList.products.map((product) => product.category));

    const selectedCategory = useSelector((store) => store.category.selectedCategory);

    useEffect(() => {
        if (selectedCategory) {
            const getSelectedCategoryProducts = allProductList.products.filter((product) => product.category === selectedCategory);
            dispatch(setProducts(getSelectedCategoryProducts));
            dispatch(setSelectedCategoryProductList(getSelectedCategoryProducts));
        }
    }, [selectedCategory]);

    return (
        <CategoryCard images={images} categories={[...categorySet]} />
    )
}

export default Categories;