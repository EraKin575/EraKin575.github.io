import React, { useEffect,useState } from 'react'
import {Table} from 'antd'
import { Convert,priceChange } from '../Conversion';

const Exchanges = () => {
    const [data,setdata]=useState('');
    const [searchItem,setsearchItem]=useState('');

    useEffect(()=>{
        async function fetch(){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };
            
            await fetch('https://coinranking1.p.rapidapi.com/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', options)
                .then(response => response.json())
                .then(response => setdata(response))
                .then(response=>console.log(response))
                .catch(err => console.error(err));

        }
        fetch()
    },[searchItem])

    const columns=[
       {
        title:'#',
        title:'rank'
       },
       {
        title:'Exchanges',
        dataIndex:'exchanges',
        render:({exchanges,icon})=>{
            return (
                <div className='flex gap-4'>
                    <img src={icon} alt={exchanges} className='h-8'/>
                    <p className='pt-1 font-bold'>{exchanges}</p>
                </div>
            )



        }
       } ,
       {
        title:'24h Trade Volume',
        dataIndex:'TradeVolume',
        render:(text)=>{
            return (
                <p1 className='font-bold'>{Convert(text)}</p1>
            )
        }
       },
       {
        title:'Markets',
        dataIndex:'markets'
       },
       {
        title:'Recommended',
        dataIndex:'isRecommended'
       }
    ]

    const rows=data?.data?.exchanges?.map((item)=>{
        return (
            {
                icon:item.iconUrl,
                exchanges:item.name,
                isRecommended:item.recommended,
                TradeVolume:item['24hTradeVolume'],
                markets:item.numberOfMarkets
            }
        )
    })






  return (
    <Table
    onRow={""}
    
    pagination={{
        alignment:'center'
    }}
     columns={columns} dataSource={rows} 
     />
  )
}

export default Exchanges