import React, { useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { Input} from 'antd';
import { Col,Row } from 'antd';
const { Search } = Input;

const News = () => {
    const [news, setNews] = React.useState([])
    const [search, setSearch] = React.useState()
    

    const onSearch = (value) => setSearch(value);

    useEffect(()=>{
      if(search){
        fetch( 'https://newsapi.org/v2/everything?q='+search+'&apiKey=52c99cdf841741be8d9ae0cf01d210d5')
      
        .then(response => response.json())
        .then(response => setNews(response.articles))
        .catch(err => console.error(err));
      }

    })
    const styles={
      heading:'font-montserrat text-4xl font-semibold',
      search:'float-right',
      newsPage:'p-10'
    }
  return (
    <div className={styles.newsPage}>
        <p className={styles.heading}>Latest News</p>
        <div className={styles.search}>
        <Search
      placeholder="Search for news"
      allowClear
      size="large"
      onSearch={onSearch}
      style={{
        width: 600,

      }}
    />
        </div>


    <div className={`grid grid-cols-3 gap-5`}>
        {news?.map((article)=>{
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
   
    
    </div>

    
  )
}

export default News