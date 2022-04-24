const date = new Date();
const clock = document.querySelector("#div"); 
const Hours = date.getHours();
const Minutes = date.getMinutes();
const SEconds = date.getSecond();


function getClock(){
    const date=new Date();
    const clock = document.querySelector("#div"); 
    const Hours = date.getHours();
    const Minutes = date.getMinutes();
    const SEconds = date.getSecond();

}
const presentTime = `${Hours.padstarts(2,'0')}:${Minutes.padstarts(2,'0')}:${Seconds.padstarts(2,'0')}`;

clock.innerText = presentTime ;

setInterval()