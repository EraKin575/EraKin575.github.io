import React from 'react'

const CryptoCard = ({imageUrl,name,marketCap,prices,change}) => {
    const styles={
        card:' h-[300px] flex-col w-min bg-gray-300 rounded-lg p-4',
        header:'flex',
        changePositive:'',
        changeNegative:'',
        image:'w-10 h-10 mt-2 ',
        cryptoName:'px-2 text-xl font-semibold pt-3',
    }
    let iconType;

   if(imageUrl.includes('.svg')){
    iconType='image/svg+xml'
   }
   else if(imageUrl.includes('.png')){
    iconType='image/png'
    }

    
  return (

    <div className={styles.card}>
        <div className={styles.header}>
            <img src={imageUrl} alt="imageUrl" className={styles.image} type={iconType} />
            <p1 className={styles.cryptoName}>{name}</p1>
        </div>
    <p1>{marketCap}</p1>
    <p1>{prices}</p1>
    <p1>{change}</p1>
    
  
    </div>
    

        
        
  
  
  )
}

export default CryptoCard