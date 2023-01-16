import React,{useState,useEffect} from 'react'
import { useRouter,Router } from 'next/router'
import { Convert,priceChange } from '../Conversion';
import ValueStats from '../components/ValueStats';
import SupplyStats from '../components/SupplyStats';
import LineChart from '../components/LineChart.js';
let parse = require('html-react-parser');
const CoinData = () => {
  const [data,setData]=useState('');
  const router=useRouter()
  const [html, setHtml] = useState("")
 
    

  

  const {referenceId}=router.query
  const props={
      referenceId,
  }
  console.log(props)


  
    const styles={
      coinData:'p-5',
        headers:'flex font-bold pl-3 pt-3 gap-2 text-xl pb-4 border-b-2 ',
        rank:'b-2 border-2 border-gray-300 rounded-lg px-1 font-normal text-gray-500',
        symbol:'text-gray-500 text-sm pl-2 pt-1',
        price:'pl-8 text-gray-500',
        info:'flex gap-5 font-bold pb-4 pt-2'
    }
    useEffect(()=>{
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      
      fetch('https://coinranking1.p.rapidapi.com/coin/'+props.referenceId+'?timePeriod=24h', options)
        .then(response => response.json())
        .then(response => setData(response.data.coin))
        .then(response=>console.log(response))
        .catch(err => console.error(err));
    },[props.referenceId])

    
  return (
    
    <div className={styles.coinData}>
      
      <div className={styles.headers}>
        <h1>{data.name}</h1>
        <h1 className={styles.symbol}>{data.symbol}</h1>
        <h1 className={styles.rank}>{`#${data.rank}`}</h1>
        <h1 className={styles.price}>{`$${data.price}`}</h1>
      </div>
      <div className={styles.info}>
        <h1>Price Chart</h1>
        <h1>{"24h"}<span className={`${priceChange(data.change)} pl-1`} >{`${  data.change}%`}</span></h1>
        <h1>{"High"}<span className={` pl-1 text-gray-500`} >{`${ Convert(data?.allTimeHigh?.price)}`}</span></h1>
     
      </div>
      <LineChart uuid={data.uuid} />
      <div className='flex'>
      <div className='flex-col'>
      <ValueStats data={data}/>
      <SupplyStats name={data.name} data={data.supply}/>
      </div>
      <div className='w-[70%]'>
      <h1 className='text-2xl font-bold'>{`About ${data.name}`}</h1>
      <div dangerouslySetInnerHTML={{__html:data.description}} />
     
      </div>
      
      
      
      </div>

    

        
    </div>
)}
export default CoinData