import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Posts from './Posts';
import post from '../post';
export default function Blog() {
  return (
    <div className="blog-cont">
        <Announcement />
        <Navbar />
        <div className="container blog-wrapper">
        <h1 className='blog-title'>BLOG: The Song Of Style</h1>
            <div className="row">
                {post.map(item => {
                    return <div className="col-md-4">
                        <Posts item={item} key={item.id}/>
                    </div>
                    
                })}
            </div>
        </div>
    </div>
  )
}
