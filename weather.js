const API_kEY = "5268d4edc8412c78032c7ddd1f9e4261" ;
 

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat, lng) ;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_kEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })

}

function onGeoError(){
    alert("can't find you. NO weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

  