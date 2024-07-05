import React from 'react'
import news from "../assets/news.jpg"

function NewsItem({ title, description, image, url }) {
    return (
        <div className='col-lg-3'>
            <div className="card bg-dark text-light mb-3 d-inline-block w-100 h-90">
                <img src={image?image:news} style={{ width:"100%", height:"200px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description}</p>
                    <a target='_blank' href={url} className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;