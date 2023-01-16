import React from 'react'

const SupplyStats = ({data,name}) => {
    console.log(data)
    const styles={
        header:'text-2xl font-bold',
        valueStats:'flex-wrap gap-5 w-[80%] flex-end bg-gray-200 rounded-lg pl-4 pt-4 mb-1',
        valueStatsItem:'flex gap-10 py-5 justify-between border-b-2 border-gray-300 pr-14',
        key:'font-bold'


    }
  return (
    <div className={styles.valueStats}>
        <h1 className={styles.header}>Supply Statistics</h1>
        <h1>{`View the total and circulating supply of ${name}, including details on how the supplies are calculated.`}</h1>
        <div className={styles.valueStatsItem}>
            <p  className={styles.key}>Total Supply</p>
            <p>{data?.total}</p>
            
        </div>
        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Max Supply</p>
            <p >{data?.max}</p>
            
        </div>

        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Circulating Supply</p>
            <p>{data?.circulating}</p>
           
        </div>
        <div className={styles.valueStatsItem}>
            <p className={styles.key}>Issued Blockchain</p>
        </div>
        <div className={styles.valueStatsItem}>
        </div>
         

    </div>
  )
}

export default SupplyStats 