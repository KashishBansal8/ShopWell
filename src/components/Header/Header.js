import React from 'react'
import SearchBar from './SearchBar/SearchBar';
import CartIcon from '../../assets/shopping-cart.png';
import "./Header.css";

const Header = () => {
    return (
        <nav className='flex product-header'>
            <div className="logo">ShopWell</div>
            <SearchBar />
            <div className="cart">
                <img src={CartIcon} alt="cartIcon" />
            </div>
        </nav>
    )
}

export default Header
