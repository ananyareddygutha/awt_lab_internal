async function weather(){
    let cityname=document.getElementById("city");
    const url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=dbf23a70ce9b88ffd04277106e98fc55'
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    let {main:{temp,temp_min,temp_max}}=data;
    console.log(data);
    document.getElementById("temp").innerHTML="temperature :"+temp;
    document.getElementById("min").innerHTML="Min temperature :"+temp_min;
    document.getElementById("max").innerHTML="Max temperature :"+temp_max;
    console.log("temperature :"+temp);
    console.log("Min temperature :"+temp_min);
    console.log("Max temperature :"+temp_max);
}
