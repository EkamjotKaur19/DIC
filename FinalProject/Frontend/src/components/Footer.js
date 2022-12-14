import React from 'react'

export default function Footer() {
  return (
    <div className="foot-cont">
        <div className="foot-left">
            <h1 className="foot-left-title">Fashion Store</h1>
            <p className="foot-desc">
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </p>
            <div className="social">
                <i class="fa-brands fa-facebook-f foot-icon fb"></i>
                <i className="fa-brands fa-instagram foot-icon insta"></i>
                <i className="fa-brands fa-twitter foot-icon tt"></i>
                <i className="fa-brands fa-pinterest foot-icon pin"></i>
            </div>
        </div>

        <div className="foot-center">
            <h1 className="foot-center-title">Useful Links</h1>
            <ul className="foot-links">
                <li>Home</li>
                <li>Man Fashion</li>
                <li>Accessories</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Cart</li>
                <li>Women Fashion</li>
                <li>My Account</li>
                <li>Wishlist</li>
                <li>Terms</li>
            </ul>
        </div>

        <div className="foot-right">
            <h1 className="foot-right-title">Contact</h1>
            <div className="contact-item">
                <i class="fa-solid fa-location-pin foot-icon navi"></i>
                622 Dixie Path, South Tobinchester 98336
            </div>

            <div className="contact-item">
            <i class="fa-thin fa-circle-phone-flip foot-icon"></i>
                +1 234 56 78
            </div>

            <div className="contact-item ">
                <i className="fa-regular fa-envelope foot-icon env"></i>
                contact@lama.dev
            </div>
        </div>
    </div>
  )
}
