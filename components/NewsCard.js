import React from 'react'
import Link from 'next/link'

const NewsCard = ({title,source,summary,linkTo,imageUrl}) => {

    const styles={
        card:`w-max h-[300px] bg-gray-800 rounded-lg p-4`,
        heading:'flex ',
        headingText:'text-white text- w-[15%] text-xl font-semibold',
        image:'w-[10%] h-[10%] rounded-lg',

    }
  return (
    <Link href={linkTo}>
    <div className={styles.card}>
        <div className={styles.heading}>
            <h1 className={styles.headingText}>{title}</h1>
            <img src={imageUrl} alt="imageUrl" className={styles.image} />


        </div>
        <div className={styles.summary}>
            
        </div>

    </div>
    </Link>
  )
}

export default NewsCard