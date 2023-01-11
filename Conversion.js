 function Convert(x){
    
    if(typeof(x)==='string'){
        x=Number(x);
    }
    if(Number(x)>1000000000){
        return "$"+ Number(x/1000000000).toFixed(4) + "B";
    }
    if(Number(x)>1000000){
            return "$"+Number(x/1000000).toFixed(4) + "M";
        }  
        
        
    if(Number(x)>1000){
        return "$"+Number(x/1000).toFixed(4) + "K";
    }
    else{
        return "$"+Number(x).toFixed(4)
    }
       
    
        
}
 function priceChange(x){
    const changePositive='text-green-500';
    const changeNegative='text-red-500'

    if(Number(x)>0){
        return changePositive;      
    }

    else{
        return changeNegative;
    }

}
export {Convert,priceChange}
