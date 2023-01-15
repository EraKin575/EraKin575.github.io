import React, { useEffect,useState } from 'react'
import GlobalStats from '../components/GlobalStats'
import CryptoCard from '../components/CryptoCard'

const Home = () => {
  const [data,setdata]=useState()

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    
    fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
      .then(response => response.json())
      .then(response => setdata(response))
      .catch(err => console.error(err));
  },[])

  const styles={
    homePage:'p-10',
    headingText:'text-3xl text-center font-montserrat pb-4 font-bold',
    cryptoInfo:'grid grid-cols-5 gap-3 pl-0'



  }
  return (
    <div className={styles.homePage}>
      <h1 className={styles.headingText}>Global Stats</h1>
      <GlobalStats 
      total24hVolume={data?.data?.stats?.total24hVolume}
      totalMarketCap={data?.data?.stats?.totalMarketCap} 
      totalExhanges={data?.data?.stats?.totalExchanges} 
      totalMarkets={data?.data?.stats?.totalMarkets} 
      />
      <h1 className='text-4xl pb-6 font-bold'>Top 10 Cryptocurrencies</h1>
      <div className={styles.cryptoInfo}>
              {data?.data?.coins?.filter((item,idx)=>idx<10).map((coin)=>{
        return (
          <CryptoCard
          imageUrl={coin.iconUrl}
          name={coin.name}
          prices={coin.price}
          marketCap={coin.marketCap}
          change={coin.change}
          />


        )
      }
      )
    }
    </div>
    

   
     </div>

      
    
  )
}

export default Home