import React, { useEffect, useState } from 'react'
import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../utils/productSlice';

const priceOptions = [
    { value: "highToLow", label: "High to Low" },
    { value: "lowToHigh", label: "Low to High" }
];

const ratingOptions = [
    { value: "4AndAbove", label: "4 & above" },
    { value: "3AndAbove", label: "3 & above" }
];

const Filter = () => {
    const allProducts = useSelector((store) => store.product.allConstantProducts);
    const products = useSelector((store) => store.product.products);
    const selectedCategory = useSelector((store) => store.category.selectedCategory);
    const selectedCategoryProductList = useSelector((store) => store.category.categoryProductList);
    const dispatch = useDispatch();

    const constantProductList = Array.isArray(allProducts) ? allProducts : allProducts.products;

    const selecteCategoryBrandList = selectedCategory && constantProductList.filter((product) => {
        if (product.category === selectedCategory) {
            return product.brand;
        }
    });
    const brands = selecteCategoryBrandList.length && new Set(selecteCategoryBrandList.map((product) => product.brand));
    const brandOptions = selectedCategory && [...brands];
    brandOptions.length && brandOptions.unshift("All");

    const [priceFilterValue, setPriceFilterValue] = useState(priceOptions[0].value);
    const [brandFilterValue, setBrandFilterValue] = useState(brandOptions[0]);
    const [ratingFilterValue, setRatingFilterValue] = useState(ratingOptions[0].value);

    let filteredProductList = selecteCategoryBrandList.length ? [...selecteCategoryBrandList] : [...constantProductList];

    const initFilter = () => {
        let initProductFilteredList = selecteCategoryBrandList.length ? [...selecteCategoryBrandList] : [...constantProductList];
        initProductFilteredList = initProductFilteredList.sort((a, b) => {
            return b.price - a.price;
        });
        initProductFilteredList = initProductFilteredList.filter((product) => product.rating >= 4);
        dispatch(setProducts(initProductFilteredList));
    }

    const handlePriceChange = (e) => {
        setPriceFilterValue(e.target.value);
    }

    const handleBrandChange = (e) => {
        setBrandFilterValue(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRatingFilterValue(e.target.value);
    }

    const handleApplyFilter = () => {
        if (brandFilterValue === "") {
            setBrandFilterValue(brandOptions[0]);
        }

        if (priceFilterValue === "highToLow") {
            filteredProductList = filteredProductList.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else {
            filteredProductList = filteredProductList.sort((a, b) => a.price - b.price);
        }

        if (ratingFilterValue === "4AndAbove") {
            filteredProductList = filteredProductList.filter((product) => product.rating >= 4);
        }
        else {
            filteredProductList = filteredProductList.filter((product) => product.rating >= 3);
        }

        if (brandFilterValue === "All" || !brandFilterValue || brandFilterValue === "") {
            dispatch(setProducts(filteredProductList));
            return;
        }
        else {
            filteredProductList = filteredProductList.filter((product) => product.brand.includes(brandFilterValue));
        }

        dispatch(setProducts(filteredProductList));
    }

    const handleResetFilter = () => {
        setPriceFilterValue(priceOptions[0].value);
        setBrandFilterValue(brandOptions[0]);
        setRatingFilterValue(ratingOptions[0].value);
        initFilter();
    }

    useEffect(() => {
        initFilter();
    }, []);

    useEffect(() => {
        setBrandFilterValue(brandOptions[0], selectedCategory);
    }, [selectedCategory]);
    return (
        <div className='filter-cont flex flex-column'>
            <h2 className="filter-heading">Filters</h2>
            <div className="selected-category-label flex">
                <p>Selected category:</p>
                <span>{selectedCategory}</span>
            </div>
            <div className="add-filters-section flex flex-column">
                <div className="price-filter flex flex-column filter-dropdown-label-gap">
                    <div className="label">Price</div>
                    <select value={priceFilterValue} onChange={handlePriceChange}>
                        {priceOptions.map((priceOption, index) => {
                            return (
                                <option key={index} value={priceOption.value}>{priceOption.label}</option>
                            )
                        })}
                    </select>
                </div>
                {selectedCategory ?
                    <div className="brand-filter flex flex-column filter-dropdown-label-gap">
                        <div className="label">Brands</div>
                        <select value={brandFilterValue} onChange={handleBrandChange}>
                            {brandOptions.map((brandOption, index) => {
                                return (
                                    <option key={index} value={brandOption}>{brandOption}</option>
                                )
                            })}
                        </select>
                    </div>
                    : ""
                }
                <div className="rating-filter flex flex-column filter-dropdown-label-gap">
                    <div className="label">Rating</div>
                    <select value={ratingFilterValue} onChange={handleRatingChange}>
                        {ratingOptions.map((ratingOption, index) => {
                            return (
                                <option key={index} value={ratingOption.value}>{ratingOption.label}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="filter-buttons-cont flex">
                <button className='apply-filter-btn' onClick={handleApplyFilter}>Apply Filter</button>
                <button className='reset-filter-btn' onClick={handleResetFilter}>Reset</button>
            </div>
        </div>
    )
}

export default Filter
