import React, { useEffect, useState } from 'react'
import NewsItem from './News-item';

function NewsBoard({ category }) {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                setArticles(resp.articles)
            })
    }, [category])

    return (
        <div className='container-fluid mt-3'>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
            <div className='row'>
                {
                    articles.map((news, index) => {
                        return <NewsItem key={index} title={news.title} descrition={news.descrition} image={news.urlToImage} url={news.url} />
                    })
                }
            </div>
        </div>
    )
}

export default NewsBoard;