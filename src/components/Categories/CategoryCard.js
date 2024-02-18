import React from 'react';
import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../utils/categorySlice';

const CategoryCard = ({ images, categories }) => {
    const dispatch = useDispatch();
    const handleCategoryChange = (category) => {
        dispatch(setSelectedCategory(category));
    }

    const selectedCategoryVal = useSelector((store) => store.category.selectedCategory);
    return (
        <div className='flex categories-section'>
            {
                categories.map((category, index) => {
                    return (
                        <div className='flex category-card flex-column' onClick={() => handleCategoryChange(category)} key={index}>
                            <img src={images[index]} alt="Category" />
                            <p className={selectedCategoryVal === category ? "selected-category category-title" : "category-title"}>{category}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard
