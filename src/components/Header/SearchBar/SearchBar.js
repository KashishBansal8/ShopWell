import React, { useState } from 'react';
import SearchIcon from "../../../assets/search-symbol.png";
import './SearchBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../../utils/productSlice';
import { setSelectedCategory, setSelectedCategoryProductList } from '../../../utils/categorySlice';

const SearchBar = () => {
    const allProducts = useSelector((store) => store.product.allConstantProducts);
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");

    const productList = Array.isArray(allProducts) ? allProducts : allProducts.products;

    const handleSearchClick = () => {
        if (searchText) {
            const searchedProductList = productList.filter((product) => {
                if (product.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    product.description.toLowerCase().includes(searchText.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchText.toLowerCase())) {
                    return product;
                }
            });
            dispatch(setProducts(searchedProductList));
            const getSelectedCategoryProducts = productList.filter((product) => product.category.includes(searchText));
            if (getSelectedCategoryProducts.length) {
                dispatch(setProducts(getSelectedCategoryProducts));
                dispatch(setSelectedCategoryProductList(getSelectedCategoryProducts));
                dispatch(setSelectedCategory(getSelectedCategoryProducts.length && getSelectedCategoryProducts[0].category));
            }
            else {
                dispatch(setSelectedCategory(""));
            }
        }
        else {
            dispatch(setProducts(productList));
        }
    }
    return (
        <div className='flex search-bar-cont'>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className='search-bar-button' onClick={handleSearchClick}>
                <img src={SearchIcon} alt="SearchIcon" />
            </button>
        </div>
    )
}

export default SearchBar
