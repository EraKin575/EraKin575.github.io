import React from 'react'
import Link from 'next/link'

const NewsCard = ({title,source,summary,linkTo,imageUrl}) => {

    styles={
        card:`w-[300px] h-[300px] bg-gray-800 rounded-lg p-4`,
        heading:'flex ',
        headingText:'text-white text-xl font-semibold',

    }
  return (
    <Link href={linkTo}>
    <div className={styles.card}>
        <div className={styles.heading}>
            <h1 className={styles.headingText}>{title}</h1>
            <img src={imageUrl} alt="imageUrl" />


        </div>
        <div className={styles.summary}>
            <p>{summary}</p>
        </div>

    </div>
    </Link>
  )
}

export default NewsCard