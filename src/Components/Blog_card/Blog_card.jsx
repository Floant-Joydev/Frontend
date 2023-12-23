import React from 'react'
import './Blog_card.css'
import { Link } from 'react-router-dom'


const BlogCard = ({image, des, id}) => {
  return (
    <>
    <div className="blog">
        <div className="image">
          <Link to={`/blog/${id}`}><img src={image} alt={image} /></Link>
        </div>
        <p>{des}</p>
        <div className="blog-btn">
            <Link to={`/blog/${id}`}><button>Read Blog</button></Link>
        </div>
    </div>
    </>
  )
}

export default BlogCard