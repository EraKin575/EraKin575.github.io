

async function CoinsData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    await fetch('https://coinranking1.p.rapidapi.com/coins', options)
        .then(response => response.json())     
        .catch(err => console.error(err));
    
    return response;
}
console.log(CoinsData());
