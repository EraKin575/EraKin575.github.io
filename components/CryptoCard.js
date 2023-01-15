import React from 'react'
import {Convert,priceChange} from '../Conversion';

import Image from 'next/image';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


const CryptoCard = ({imageUrl,name,marketCap,prices,change}) => {
  const styles={
    card:'m-1 font-montserrat',
    headers:'flex font-bold pl-3 pt-3',
  }
  return (
    <div className={styles.card}>
    <Card
     
      bordered={false}
     
      style={{
        width: 180,
        height: 160,
        
        backgroundColor:'#F1F1F1',
        fontFamily:'Montserrat',
        
      }}
     
    >
       <Meta
      avatar={<Avatar src={imageUrl} />}
      title={name}
      
    />
    
      <div className='float-left pt-[15%]'>
      <p className='w-max'><span className='font-bold pl-0'>{`Market Cap:`}</span>{`${Convert(marketCap)}`}</p>
      <p className='w-max'><span className='font-bold'>{`Price`}</span>{`${Convert(prices)}`}</p>
      <p className='w-max'><span className='font-bold'>{`Change:`}</span><span className={priceChange(change)}>{`${(change)}`}</span></p>
  
   
      </div>
    </Card>
    </div>
  )
  
        
        
  
  
  
}

export default CryptoCard