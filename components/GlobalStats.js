import React from 'react'

const GlobalStats = ({total24Volume,totalMarketCap,totalExhanges,totalMarkets}) => {
    const styles={
        globalStats:'grid cols-4 row-2 gap-5',
        globalStatsItem:'font-semibold text-xl flex'
    }
    const propsArray=[total24Volume,totalMarketCap,totalExhanges,totalMarkets]

  return (
    <div className={styles.globalStats}>
        {propsArray.map((prop)=>{
            return(
                <div className={styles.globalStatsItem}>
                    <div className="w-1/2 h-1/2 bg-blue-500 rounded-lg"></div>
                    <p>{prop}</p>
                </div>
              
            )
        }
        )}


        

        

        


    </div>

  )
}

export default GlobalStats