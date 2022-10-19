let url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";//This is a custom varaible declared to store url of the api.
let a= fetch(url);//The url is passed to fetch the data from the url.

a.then((response)=>{
    console.log(response.status);//This is to check the status of the response.
    console.log(response.ok);
    console.log(response.headers);
    return response.json();//The response is returned as response.json();
}).then((value2)=>{
    console.log(value2);//Here the value of the url is displayed in form of json();
})
