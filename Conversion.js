 function Convert(x){
    
    if(typeof(x)==='string'){
        x=Number(x);
    }
    if(Number(x)>1000000000){
        return "$"+ Number(x/1000000000).toFixed(2) + "B";
    }
    if(Number(x)>1000000){
            return "$"+Number(x/1000000).toFixed(2) + "M";
        }  
        
        
    if(Number(x)>1000){
        return "$"+Number(x/1000).toFixed(2) + "K";
    }
    else{
        return "$"+Number(x).toFixed(2)
    }
       
    
        
}
 function priceChange(x){
    const changePositive='text-green-500';
    const changeNegative='text-red-500'

    if((x)>0){
        return changePositive;      
    }

    return changeNegative

}
export {Convert,priceChange}
