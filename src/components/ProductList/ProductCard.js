import React from 'react'
import Star from "../../assets/star.png";
import Rupee from "../../assets/rupee.png";
import './ProductList.css';

const ProductCard = ({ product }) => {
    const { id, title, description, price, brand, rating, stock, thumbnail } = product;
    return (
        <div className='flex product-card flex-column'>
            <div className="product-img-cont">
                <img src={thumbnail} alt="" />
            </div>
            <div className="product-info-cont flex flex-column">
                <p className='product-title'>{title}</p>
                <p className='product-desc'>{description}</p>
                <p className='product-brand'>Brand - {brand}</p>
                <div className="rating-price-cont flex">
                    <p className="product-rating flex">
                        {rating}
                        <img src={Star} alt="Star" />
                    </p>
                    <p className="product-price flex">
                        <img src={Rupee} alt="Rupee" />
                        {price}
                    </p>
                </div>
            </div>
            {stock === 0 ?
                <>
                    <div className="out-of-stock-label">
                        Out Of Stock
                    </div>
                    <div className="overlay"></div>
                </>
                : ""}
        </div>
    )
}

export default ProductCard
