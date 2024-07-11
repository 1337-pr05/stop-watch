let timer = null;
let startTime= 0;
let elapsedTime = 0;
let isRuning = false;
let count = 0 ;
var audio= new Audio('beep.mp3')
function start(){
    if(!isRuning){
        startTime= Date.now() - elapsedTime
        timer = setInterval(update,10);
        isRuning= true;
        audio.play();
    }
 }

function stop(){
    if(isRuning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRuning = false;
    audio.play();
}
}
function reset(){   
    clearInterval(timer);
    timer = null;
    startTime= 0;
    elapsedTime = 0;
    isRuning = false;
    document.getElementById('time').textContent= `00:00:00:00`;
    document.getElementById("lap-report").textContent ='COUNT-LAPS';
    count =0;
    audio.play();

}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hour = Math.floor(elapsedTime/(1000*60*60)) ;//this will give us hour
    let minute = Math.floor(elapsedTime/(1000*60)) % 60;
    let second = Math.floor(elapsedTime/(1000)) %60;
    let miliseconds = Math.floor((elapsedTime % 1000)/10);
    hour = String(hour).padStart(2,"0");
    minute = String(minute).padStart(2,"0");
    second= String(second).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");
    document.getElementById('time').textContent= `${hour}:${minute}:${second}:${miliseconds}`;
}
function laps(){
  
    count++;
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hour = Math.floor(elapsedTime/(1000*60*60)) ;//this will give us hour
    let minute = Math.floor(elapsedTime/(1000*60)) % 60;
    let second = Math.floor(elapsedTime/(1000)) %60;
    let miliseconds = Math.floor((elapsedTime % 1000)/10);
    hour = String(hour).padStart(2,"0");
    minute = String(minute).padStart(2,"0");
    second= String(second).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");
    document.getElementById("lap-report").textContent = `(${count}) : ${hour} : ${minute} : ${second} : ${miliseconds}`;
    audio.play();
        
}