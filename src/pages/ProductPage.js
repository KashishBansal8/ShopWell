import React, { useState } from 'react';
import Filter from '../components/Filter/Filter';
import Categories from "../components/Categories/Categories";
import ProductList from "../components/ProductList/ProductList";
import ProductListJson from "../utils/ProductList.json";

const ProductPage = () => {
    const [productList, setProductList] = useState(ProductListJson);
    const [allProductList, setAllProductList] = useState(ProductListJson);
    return (
        <div className='flex product-page'>
            <div className="category-section">
                <Categories />
            </div>
            <div className='filter-product-card-cont'>
                <Filter />
                <ProductList />
            </div>
        </div>
    )
}

export default ProductPage
