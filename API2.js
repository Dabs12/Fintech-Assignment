var baseurl = "https://data.nasdaq.com/api/v3/datasets/BCHAIN/MKPRU.json?&start_date=2022-04-15&end_date=2022-04-19&api_key=8V5HY1rLg3GFagpWR5p5"
//fetching api data and headers for negating proxy error
fetch(`${baseurl}`,{
    method: `GET` ,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    //checking if response is ok
}).then((response) =>{
    if(response.ok){
        response.json().then((json) =>{
            console.log(json.dataset)
            // variable coinsData stores json data of date and price of BTC
            let coinsData = json.dataset.data
            // dummy variable cryptoCoins for for loop
            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }
            // for loop starts
            coinsData.forEach((data) => {
                cryptoCoins += "<tr>";
                cryptoCoins += `<td> ${data[0]}`;
                cryptoCoins += `<td> ${data[1]}</td>`;"</tr>";
            });
            //for loop ends
            document.getElementById("data").innerHTML = cryptoCoins;
        });
    }
})
.catch((error) =>{
    console.log(error);
});