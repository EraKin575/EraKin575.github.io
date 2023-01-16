
import '../styles/globals.css'
import Navbar from '../components/Navbar'


export default function App({ Component, pageProps }) {
  
  return(<div className='font-montserrat text-slate-700'>
  <Navbar/>
  

    <Component {...pageProps} />
    
 
  


  
  </div>)

}
