import React from 'react';
import { popularProducts } from '../data';
import Product from './Product';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="products-cont">
        {popularProducts.map(item => (
            <Link to="/product/:id"><Product item={item} key={item.id} /></Link>
        ))}
    </div>
  )
}
