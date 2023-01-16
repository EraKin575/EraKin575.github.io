import { getDisplayName } from 'next/dist/shared/lib/utils'
import { Convert } from '../Conversion'
import React from 'react'
const camelToFlat=(camel)=>{
    const camelCase =camel.replace(/([a-z])([A-Z])/g, '$1 $2')

    return camelCase
}


const ValueStats = ({data}) => {
    const styles={
        header:'text-2xl font-bold',
        valueStats:'flex-wrap gap-5 w-[80%] flex-end bg-gray-200 rounded-lg pl-4 pt-4 mb-10',
        valueStatsItem:'flex gap-10 py-5 justify-between border-b-2 border-gray-300',
        key:'font-bold'


    }
    
    
  return (

    <div className={styles.valueStats}>
        <h1 className={styles.header}>Value Statistics</h1>
        <p>{`An overview showing the statistics of ${data.name}, such as the base and quote currency, the rank, and trading volume.`}</p>
        <div className={styles.valueStats}>
        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Price</p>
            <p1>{Convert(data.price)}</p1>

        </div>
        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Coin Rank</p>
            <p>{data.rank}</p>
                
        </div>

        <div className={styles.valueStatsItem}>
            <p className={styles.key}>24H Volume</p>
            <p>{Convert(data['24hVolume'])}</p>
                
        </div>

        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Market Cap</p>
            <p>{Convert(data.marketCap)}</p>          
        </div>
        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Fully Diluted Market Cap</p>
            <p>{Convert(data.fullyDilutedMarketCap)}</p>
                
            </div>
           

                   
           
        </div>
        
       
    </div>
  )
}

export default ValueStats