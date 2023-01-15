import React from 'react'

const SupplyStats = ({data}) => {
    console.log(data)
    const styles={
        header:'text-2xl font-bold',
        valueStats:'flex-wrap gap-5 w-[80%] flex-end bg-gray-200 rounded-lg pl-4 pt-4 ',
        valueStatsItem:'flex gap-10 py-5',
        key:'font-bold'


    }
  return (
    <div className={styles.valueStats}>
        <h1 className={styles.header}>Supply Statistics</h1>
        <h1>{`View the total and circulating supply of ${data.name}, including details on how the supplies are calculated.`}</h1>
        <div className={styles.valueStats}>
            <p>Total Supply</p>
            
        </div>
        <div className={styles.valueStats}>
            <p>Max Supply</p>
            
        </div>

        <div className={styles.valueStats}>
            <p>Circulating Supply</p>
           
        </div>
        <div className={styles.valueStats}>
            <p>Issued Blockchain</p>
        </div>
        <div className={styles.valueStats}>
        </div>
         

    </div>
  )
}

export default SupplyStats 