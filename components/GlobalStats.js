import React from 'react'
import {Convert,priceChange} from '../Conversion';

const GlobalStats = ({total24hVolume,totalMarketCap,totalExchanges,totalMarkets}) => {
    const styles={
        globalStats:'grid grid-cols-2 grid-rows-2 gap-8 justify-items-evenly pb-4 text-center',
        globalStatsItem:'font-semibold text-xl p-6 '
    }
    const propsArray=[total24hVolume,totalMarketCap,totalExchanges,totalMarkets]
    const labels=['Volume(24h)','Total Market Cap','Total Exchanges','Total Markets']
    let globalStatsArray=[]
    for(let i=0;i<propsArray.length;i++){

        propsArray[i]=Convert(propsArray[i])
        globalStatsArray.push (
            <div className={styles.globalStatsItem}>
                <p>{labels[i]}</p>
                <p className={'font-normal'}>{propsArray[i]}</p>
            </div>
        )
    }

  return (    
                <div className={styles.globalStats}>
                    {globalStatsArray}
   
                </div>   

  )
}

export default GlobalStats