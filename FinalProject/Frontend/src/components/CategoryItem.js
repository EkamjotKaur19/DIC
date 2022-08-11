import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoryItem(props) {
    const {item} = props;
  return (
    <div className="item-cont">
      <Link to={`/products/${item.cat}`}>
        <img className="cat-img" src={item.img} alt=""/>
        <div className="cat-info">
          <h1 className="cat-title">
              {item.title}
          </h1>
          <button className="cat-btn">SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}
