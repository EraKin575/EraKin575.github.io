"use client"
import React,{useState,useEffect} from 'react'
import { useRouter,Router } from 'next/router'
import Link from 'next/link'

import {Tabs} from 'antd'

const Navbar = () => {
    const router=useRouter();
    const [selected, setSelected] =useState(0)
    let navItems=['Homepage','Cryptocurrencies']
   
    const onChange=(key)=>{
        router.push(`/${navItems[key-1]}`)
    }
    const items=navItems.map((item,idx)=>{
        return (
            {
                key:idx+1,
                label:item,
               
            }
        )
    })
    return (
        <Tabs
        style={{
            fontFamily:'Montserrat',
            fontWeight:'bold',
            fontSize:'x-large'
        }}
        defaultActiveKey='0'
        centered
        items={items}
        onChange={onChange}
        
        />
        


        )
  
}

export default Navbar