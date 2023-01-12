import React, { useEffect,useState } from 'react'
import { Table,Input } from 'antd';
import {Convert,priceChange} from '../Conversion';
const { Search } = Input;
const Cryptocurrencies = () => {

    const styles={
        heading:'text-center font-bold text-4xl',
        categoryHeaders:'flex flex-wrap font-montserrat font-bold gap-4 text-sm pb-2',
        categoryTag:' text-xs p-1 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-[#0060ff]',
        search:'justify-items-center flex flex-wrap gap-4',
        
    }
    const [data,setdata]=useState()
    const [timePeriod,setTimePeriod]=useState('24h')
    const [searchItem,setsearchItem]=useState('')
    const [category,setCategory]=useState('All')
    const [api,setapi]=useState('https://coinranking1.p.rapidapi.com/coins?')

    function handleCategoryClick(item){
        setCategory(item);
        setapi(api+`&&tags%5B0%5D=${item}`)
        
       
    }
    const onSearch=(value)=>{
        setsearchItem(value)

    }




    useEffect(()=>{
        setapi(`https://coinranking1.p.rapidapi.com/coins?search=${searchItem}&timePeriod=${timePeriod}`)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        
        fetch(api, options)
            .then(response => response.json())
            .then(response => setdata(response))
            .then(response => console.log(response))
            .catch(err => console.error(err));
    },[api,searchItem,timePeriod])
    const columns=[
        {
            title:'Name',
            dataIndex:'name'
        },
        {
            title:'Price',
            dataIndex:'price'

        },
        {
            title:'Change',
            dataIndex:'change',
            render: (text) => <p className={priceChange(text)}>{text}</p>,

        },
        {
            title:'Market Cap',
            dataIndex:'marketCap'
        },
        {
            title:'Volume(24h)',
            dataIndex:'volume'
        },

        
    ]
    const availableTimePeriods = ['1h','3h','12h','24h','7d','30d','3m','1y','3y','5y'];
    const categoryTags=['meme','defi','stablecoin' ,'nft', 'dex', 'exchange' ,'staking' ,
    'dao', 'metaverse', 'gaming' ,'wrapped' ,'layer-1', 'layer-2']
    const items=categoryTags.map((item,idx)=>{
        return (
            {
                key:idx,
                label:(item).toUpperCase()
            }
        )

    })

    

    
  return (
    <div>
       
       
        <h1 className={styles.heading}>CryptoCurrencies Price List</h1>
        <div className={styles.search}>
        <Search
        style={{
            width: 400,
        }}

      
         placeholder="input search text" 
         onSearch={onSearch}
          enterButton />
          </div>
        <div className={styles.categoryHeaders}>
            {categoryTags.map((item)=>{
                return (
                    <p1 className={styles.categoryTag} onClick={handleCategoryClick}>{item.toUpperCase()}</p1>
                )
            })}

            </div>
       
        <Table columns={columns} />




    </div>
  )
}

export default Cryptocurrencies