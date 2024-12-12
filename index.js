let temp_num=document.getElementById("temp-num");
let cityName=document.getElementById("serch-box");
let bi_search=document.getElementById("bi-search")
let humidity=document.getElementById("humidity");
let speed=document.getElementById("speed");
let temp_status=document.getElementById("temp-status")
let weatherImg=document.getElementById("weatherImg")
let footer=document.getElementById("footer")

function disableBtn(){
    if(cityName.value===""){
      bi_search.disabled=true

    }
    else{
     bi_search.disabled=false;

    }
}
  // https://api.sunrisesunset.io/json?lat=17.3753&lng=78.4744
 async function WeatherCheckClick(city){
    footer.style.display="block"
    const api_key="f00c38e0279b7bc85480c3fe775d518c";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const response= await fetch(url)
    var data1=await response.json()
    console.log(data1)
    // const response= fetch(url).then(data=>{
    //   return data.json()
    // })
    //  Promise.resolve(response).then(data1=>{
     temp_num.innerHTML= Math.round(data1.main.temp)+"<sup>°C</sup>" ;
    humidity.innerHTML=data1.main.humidity+"%";
    speed.innerHTML=data1.wind.speed +"kph";
    temp_status.innerHTML=data1.weather[0].description;
    if(data1.weather[0].main==="Clear" ){
    weatherImg.src="clear.svg"
    
    }
    if(data1.weather[0].main==="Smoke" ) {
      weatherImg.src="snow.svg"
    }
    if(data1.weather[0].main==="Haze" ){
         weatherImg.src="mist.svg"

    }
    if(data1.weather[0].main==="Mist" ){
        weatherImg.src="mist.png"

   }
   if(data1.weather[0].main==="Clouds" ){
    weatherImg.src="clouds.svg"

}
    // })
    
    
} 


bi_search.addEventListener("click",()=>{
    WeatherCheckClick(cityName.value)
})
 