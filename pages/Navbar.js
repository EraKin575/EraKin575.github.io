import React from 'react'
import { useRouter,Router } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
    const [selected, setSelected] = React.useState(0)
    let navItems=['Home','Cryptocurrencies','News']
    const handleClick=(e)=>{
        setSelected(e.target.innerText)
       
    
    }
    const styles={
        navBackground:'flex h-min items-center justify-center flex-wrap bg-gray-800 p-6 top-0 right-0 ',
        navItems:'flex gap-9 text-xl text-white',
        navItem:`text-white text-lg pb-4 rounded-lg p-3 font-semibold cursor-pointer hover:text-blue-500 hover:bg-slate-700`
    }
  return (
    <div>
        <nav className={styles.navBackground}>
           
            <div className={styles.navItems}>
            {navItems.map((item)=>{
        return(
                <Link href={`/${item}`}><h1 onClick={handleClick} className={styles.navItem}>{item}</h1></Link>
        )
    })}
            </div>
        </nav>
        


    </div>
  )
}

export default Navbar