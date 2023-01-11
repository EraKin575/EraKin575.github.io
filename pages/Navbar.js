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
        navBackground:' h-screen items-center justify-center flex-wrap bg-gray-800 p-6 sticky top-0 z-50 ',
        navItems:' gap-9 text-xl text-white',
        navItem:`text-white text-lg pb-4 rounded-lg p-3 font-semibold cursor-pointer hover:text-blue-500 hover:bg-slate-700 mb-4`,
        navItemActive:`text-white text-blue-500 text-lg pb-4 rounded-lg p-3 font-semibold cursor-pointer hover:text-blue-500 hover:bg-slate-700 bg-slate-700`

    }
  return (
    <div>
        <nav className={styles.navBackground}>
           
            <div className={styles.navItems}>
            {navItems.map((item)=>{
        return(
                <Link href={`/${item}`}><h1 onClick={handleClick} className={selected===item?styles.navItemActive:styles.navItem}>{item}</h1></Link>
        )
    })}
            </div>
        </nav>
        


    </div>
  )
}

export default Navbar