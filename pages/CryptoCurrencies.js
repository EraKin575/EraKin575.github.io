import React, { useEffect,useState } from 'react'
import { Table,Input,Spin,Dropdown,Space,ConfigProvider } from 'antd';
import { DownOutlined,SearchOutlined } from '@ant-design/icons';
import {Convert,priceChange} from '../Conversion';
import Router, { useRouter }  from 'next/router';


const { Search } = Input;

const Cryptocurrencies = () => {

    

    const styles={
        heading:'text-center font-bold text-4xl pb-5',
        subHeading:'text-center text-lg pb-5',
        categoryHeaders:'flex py-7 flex-wrap font-montserrat font-bold gap-4 text-sm pb-2 pl-16',
        categoryTag:' text-xs p-1 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-[#0060ff]',
        search:'text-center',
        dropdownMenu:'text-right',

        
    
        
    }
    const [data,setdata]=useState('')
    const [timePeriod,setTimePeriod]=useState('24h')
    const [searchItem,setsearchItem]=useState('')
    const [category,setCategory]=useState('All')
    const [api,setapi]=useState('https://coinranking1.p.rapidapi.com/coins?')

    function handleCategoryClick(item){
       setCategory(item)
       console.log(item)    
    }
    const onClick = ({ key }) => {
        setTimePeriod(availableTimePeriods[key])
        
    };
    const handleChange=(e)=>{
        setsearchItem(e.target.value)

    }
    


   useEffect(()=>{
    let new_api = api;

    category!='All'?new_api += `&tags%5B0%5D=${category}`:new_api+="";
    setapi(new_api);
   },[category])

    useEffect(()=>{  
        
        setapi(`https://coinranking1.p.rapidapi.com/coins?search=${searchItem}&timePeriod=${timePeriod}`)

       
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        
        fetch(api, options)
            .then(response => response.json())
            .then(response => setdata(response))
            .catch(err => console.error(err));
    },[api,searchItem,timePeriod])
    const columns=[
        {
            title:'#',
            dataIndex:'rank'
        },
        {
            title:'Name',
            dataIndex:'NameTag',
            render:({name,icon})=>{
                return (
                    <div className='flex gap-4'>
                        <img src={icon} alt={name} className='h-8'/>
                        <p className='pt-1 font-bold'>{name}</p>
                    </div>
                )



            }
           
        },
        {
            title:'Price',
            dataIndex:'price'

        },
        {
            title:'Change',
            dataIndex:'change',
            render: (text) => 
            <p className={`${text>0?'text-green-500':'text-red-500'} font-semibold`}>
                {text}
                </p>,

        },
        {
            title:'Market Cap',
            dataIndex:'marketCap'
        },
        {
            title:'Volume(24h)',
            dataIndex:'volume'
        },

        
    ]
    const availableTimePeriods = ['1h','3h','12h','24h','7d','30d','3m','1y','3y','5y'];
    const categoryTags=['All','meme','defi','stablecoin' ,'nft', 'dex', 'exchange' ,'staking' ,
    'dao', 'metaverse', 'gaming' ,'wrapped' ,'layer-1', 'layer-2']
    const items=availableTimePeriods.map((item,idx)=>{
        return (
            {
                key:idx,
                label:item,
            }
        )})
    
   
    const datasource=data?.data?.coins?.map((item,idx)=>{
        return (
            {
                key:idx,
                id:item.uuid,
                
                NameTag:{
                icon:item.iconUrl,
                name:item.name,
                },
                rank:item.rank,

                price:Convert(item.price),
                change:item.change,
                marketCap:Convert(item.marketCap),
                volume:Convert(item['24hVolume'])


            }
        )
    })


    

    
  return (
    <div className='p-4'> 
       
       
        <h1 className={styles.heading}>CryptoCurrencies Price List</h1>
        <h1 className={styles.subHeading}>All cryptocurrencies ranked by market cap.</h1>
        <ConfigProvider
        theme={{
            token:{
                fontFamily:'Montserrat,sans-serif',
                alignment:'center'
                
                
            },
        }}
        >
        <div className={styles.dropdownMenu}>
        <Dropdown
        style={{
            fontFamily:'Montserrat,sans-serif'
        }}
    menu={{
      items,
      onClick
      
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {timePeriod}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </div>
        <div className={styles.search}>

        <Input
        style={{
            width: 400,
            borderRadius: 20,
            fontWeight: 500,
            size: 'large',
        }}
        size='large'

      
         placeholder="Search for Cryptocurrency..." 
         value={searchItem|| ''}
         onChange={handleChange}
         suffix={<SearchOutlined />}

           />



          </div>
        <div className={styles.categoryHeaders}>
            {categoryTags.map((item)=>{
                return (
                    <p1 className={styles.categoryTag} onClick={()=>handleCategoryClick(item)}>{item.toUpperCase()}</p1>
                )
            })}

            </div>
       
        {data?
        <ConfigProvider
        theme={{
            Table:{
                fontFamily:'Montserrat,sans-serif',
                backgroundColor:'black'
                
                
            },
        }}
        >
        <Table 
        hoverable
        onRow={(record, rowIndex) => {

            return {
              onClick: event => {
                 console.log(record.id)
                 const referenceId=record.id
                 Router.push({
                    pathname:'./CoinData',
                    query:{
                        referenceId
                        
                    }
                 })

              }, // click row
             
            };
          }
        }
      
       
     
      
       
        pagination={{
            alignment:'center'
        }}
        columns={columns} dataSource={datasource} />
        </ConfigProvider>
        : <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>}
     </ConfigProvider>




    </div>
  )
}

export default Cryptocurrencies