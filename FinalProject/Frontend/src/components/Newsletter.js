import React from 'react'

export default function Newsletter() {
  return (
    <div className="news-cont">
        <h1 className="news-title">
        NEWSLETTER
        </h1>
        <p className="news-desc">
        Get timely updates from your favorite products.
        </p>
        <div className="input-mail">
            <input type="email" placeholder='Your email' className="news-inp" />
            <button className="news-btn">
            <i class="fa-regular fa-paper-plane send"></i>
            </button>
        </div>
        
    </div>
  )
}
