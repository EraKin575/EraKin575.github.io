import React, {useState, useEffect } from 'react'
import Line from 'react-chartjs-2'

const LineChart = ({uuid}) => {
    const [priceHistory,setpriceHistory]=useState("")
    const [timePeriod,settimePeriod]=useState("24h")
   
    const availableTimePeriods = ['1h','3h','12h','24h','7d','30d','3m','1y','3y','5y'];
    const timeArray=availableTimePeriods.map((item,idx)=>{
        return (
            <p className='font-semibold' onClick={()=>{settimePeriod(item)}}>{(item).toUpperCase()}</p>
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
        
        fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}/history?timePeriod=${timePeriod}`, options)
            .then(response => response.json())
            .then(response => setpriceHistory(response))
            
            .catch(err => console.error(err));
    },[timePeriod])
    console.log(priceHistory)
    
    const coinPrice=[]
    const coinTimeStamp=[]
    for(let i=0;i<priceHistory?.data?.history?.length;i++){
        coinPrice.push(priceHistory?.data?.history[i]?.price);
        coinTimeStamp.push(new Date(priceHistory?.data?.history[i]?.timestamp).toLocaleDateString());
    }
    console.log(coinPrice)
    console.log(coinTimeStamp)
    
    const LineData={
        labels:coinTimeStamp,
        datasets:[
{
       label:'Price in Usd',
        data:coinPrice,
        fill:false,
        backgroundColor:'#0071bd',
        borderColor:'#0071bd'

}
        ],
        

    }
    
    const options={
        scales:{
            yAxes:[
                {
                    ticks:{
                        beginAtZero:true
                    }
                }
            ]
        }
    }
    


  return (
    <div>
        <div className='flex gap-2'>
            {timeArray}
        </div>
       {priceHistory!==undefined && <Line options={options} data={LineData} />}
        
       

    </div>
  )
}

export default LineChart