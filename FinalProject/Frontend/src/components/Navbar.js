import React from 'react';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className='cont wrap'>
      <div className="left">
        <span className="language">English</span>
        <div className="search">
          <input className="nav-inp" type="text" placeholder='Search for products, brands and more' />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
      </div>
      <div className="center">
        <h4 className='logo'>FASHION STORE</h4>
      </div>
      <div className="right">
        <Link className='menuItem' to="/register">REGISTER</Link>
        <Link className='menuItem' to="/loginn">LOGIN</Link>
        <Link className='menuItem' to="/about">ABOUT US</Link>
        <Link className='menuItem' to="/blog">BLOG</Link>
        <Link className='menuItem' to="/register"></Link>
        <Link to="/cart">
          <Badge badgeContent={quantity} color="primary">
            <i className="fa-solid fa-cart-shopping"></i>
          </Badge>
        </Link>
      </div>
    </div>
  )
}
