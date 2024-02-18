import React from 'react';
import { useSelector } from "react-redux";
import ProductCard from './ProductCard';

const ProductList = () => {
    const productList = useSelector((store) => store.product.products);
    const { products } = productList;
    return (
        <div className='product-list-comp flex'>
            {
                Array.isArray(productList) && productList.length || products?.length ?
                    Array.isArray(productList) ?
                        productList?.map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )
                        :
                        products?.map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )
                    :
                    <div className='no-result-found flex'>
                        <p>Oops! No result Found</p>
                        <p>Make your search less restrictive</p>
                    </div>
            }
        </div>
    )
}

export default ProductList
