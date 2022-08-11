import React from 'react'
import { Link } from 'react-router-dom';

export default function Product(props) {
    const {item} = props;
  return (
    <div className="pdt-cont">
        <div className="circle">

        </div>
        <img src={item.img} alt="" className="pdt-img" />
        <div className="pdt-info">
            <i className="fa-solid fa-cart-shopping pdt-icon"></i>
            <Link to={`/product/${item._id}`}><i className="fa-solid fa-magnifying-glass pdt-icon"></i></Link>
            <i class="fa-regular fa-heart heart pdt-icon"></i>
        </div>
    </div>
  )
}
