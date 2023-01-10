import React, { useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { Input, Space } from 'antd';

const News = () => {
    const [news, setNews] = React.useState([])
    const [search, setSearch] = React.useState('')
    

    const onSearch = (value) => setSearch(value);

    useEffect(()=>{
        fetch( 'https://newsapi.org/v2/everything?q='+search+'&apiKey=52c99cdf841741be8d9ae0cf01d210d5')
        .then(response => response.json())
        .then(response => setNews(response.articles))
        .catch(err => console.error(err));

    })
  return (
    <div>
        <p>Latest News</p>
        <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />

        
        {news.articles?.map((article)=>{
            return(
                <NewsCard title={article.title} 
                source={article.source.name} 
                summary={article.description} 
                linkTo={article.url} 
                imageUrl={article.urlToImage} />
            )
        }
        )}
    </div>

    
  )
}

export default News