import React from 'react'
import {Convert,priceChange} from '../Conversion';

import Image from 'next/image';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


const CryptoCard = ({imageUrl,name,marketCap,prices,change}) => {
  const styles={
    card:'m-4',
    headers:'flex font-bold pl-5 pt-3',
  }
  return (
    <div className={styles.card}>
    <Card
     
      bordered={false}
     
      style={{
        width: 180,
        height: 160,
        backgroundColor:'#F1F1F1',
        margin:'auto',
        
      }}
     
    >
       <Meta
      avatar={<Avatar src={imageUrl} />}
      title={name}
      
    />
    
      <div className='float-left pt-[20%]'>
      <p className='w-max'>{`Market Cap:${Convert(marketCap)}`}</p>
      <p>{`Price:${Convert(prices)}`}</p>
      <p className={priceChange(change)}>{`Change:${(change)}`}</p>
      </div>
    </Card>
    </div>
  )
  
        
        
  
  
  
}

export default CryptoCard