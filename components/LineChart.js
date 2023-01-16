import React, {useState, useEffect } from 'react'
import moment from 'moment';
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);


const LineChart = ({uuid}) => {
    const [priceHistory,setpriceHistory]=useState("")
    const [timePeriod,settimePeriod]=useState("24h")
    const [selectedTimePeriod,setselectedTimePeriod]=useState("24h")
   
    const availableTimePeriods = ['1h','3h','12h','24h','7d','30d','3m','1y','3y','5y'];
    const timeArray=availableTimePeriods.map((item,idx)=>{
        return (
            <p className={`font-medium  cursor-pointer font-medium text-sm rounded-lg p-2 hover:bg-gray-400 hover:text-blue-600 ${selectedTimePeriod==item && `bg-gray-400`} `} onClick={()=>{settimePeriod(item)
            setselectedTimePeriod(item)
            }}>{(item).toUpperCase()}</p>
        )
    })
    

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: { 
                'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        
        fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}/history?timePeriod=${timePeriod!='24h'?timePeriod:`24h`}`, options)
            .then(response => response.json())
            .then(response => setpriceHistory(response))
            
            .catch(err => console.error(err));
    },[timePeriod,uuid])
    console.log(priceHistory)
    
    const coinPrice=[]
    const coinTimeStamp=[]
    for (let i = 0; i < priceHistory?.data?.history?.length; i += 1) {
        coinPrice.push(priceHistory?.data?.history[i].price);
      }
    
      for (let i = 0; i < priceHistory?.data?.history?.length; i += 1) {
        coinTimeStamp.push(new Date(priceHistory?.data?.history[i].timestamp*1000).toLocaleString())
      }
      const Linedata = {
        labels: coinTimeStamp,
        datasets: [
          {
            radius: 0,
            label: 'Price In USD',
            data: coinPrice,
            
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
      

   


  return (
    <div>
        <div className='flex gap-2'>
            <h1 className='pt-1.5'>Time Period:</h1>
            {timeArray}
        </div>
        <Line data={Linedata}  />
        
   
        
       

    </div>
  )
}

export default LineChart