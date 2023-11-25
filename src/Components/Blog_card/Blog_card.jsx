import React from 'react'
import './Blog_card.css'


const BlogCard = ({image, des}) => {
  return (
    <>
    <div className="blog">
        <div className="image">
            <img src={image} alt={image} />
        </div>
        <p>{des}</p>
        <div className="blog-btn">
            <button>Read Blog</button>
        </div>
    </div>
    </>
  )
}

export default BlogCard