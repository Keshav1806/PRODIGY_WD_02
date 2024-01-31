let [seconds, minutes, hours]= [0,0,0];
let timer= null;
let time= document.getElementById("display");
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds= 0;
        minutes++;
        if(minutes == 60){
            minutes= 0;
            hours++;
        }
    }
    let h= hours < 10 ? "0" + hours : hours;
    let m= minutes < 10 ? "0" + minutes : minutes;
    let s= seconds < 10 ? "0" + seconds : seconds;
    time.innerHTML= h +":"+ m +":"+ s;
}

function start(){
    timer= setInterval(stopwatch, 1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    var lapList = document.getElementById('lap-cntr');
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);}
    clearInterval(timer);
    [seconds, minutes, hours]= [0,0,0];
    time.innerHTML= "00:00:00";
}

function addlap(){
    var lapNumber = document.getElementById('lap-cntr').childElementCount + 1;
    let h= hours < 10 ? "0" + hours : hours;
    let m= minutes < 10 ? "0" + minutes : minutes;
    let s= seconds < 10 ? "0" + seconds : seconds;
    var lapTime = h +":"+ m +":"+ s;  

    // Create new list items for lap number and lap time
    var lapListItem = document.createElement('li');
    var lapSubList = document.createElement('ul');
    lapSubList.classList.add('in-lap-cntr');
    var lapNumberItem = document.createElement('li');
    var lapTimeItem = document.createElement('li');

    // Set content for lap number and lap time
    lapNumberItem.textContent = 'Lap ' + lapNumber + ': ';
    lapTimeItem.textContent = lapTime;

    // Append lap number and lap time to the sub-list
    lapSubList.appendChild(lapNumberItem);
    lapSubList.appendChild(lapTimeItem);

    // Append the sub-list to the main lap list item
    lapListItem.appendChild(lapSubList);

    // Append the new lap item to the lap-cntr
    document.getElementById('lap-cntr').appendChild(lapListItem);
}