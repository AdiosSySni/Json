let inputName = document.querySelector('#inputName'),
startBtn = document.querySelector('#start'),
clickBtn = document.querySelector('#click'),
clearbtn = document.querySelector('#clear'),
table = document.querySelector('#table'),

gameTimerP = document.querySelector('#timer');
date = new Date(0,0,0,0,0,0,0);
// miliseconds = date.getMilliseconds(),
// seconds = date.getSeconds(),
// minutes = date.getMinutes();

let obj = new Object(),
timerId;



startBtn.disabled = true;

inputName.addEventListener('blur', ()=> {
        if(inputName.value.length > 0) {
        startBtn.disabled = false
    }
    else {
        startBtn.disabled = true;
    }
})

startBtn.addEventListener('click', game) 
clearbtn.addEventListener('click', createTable)

function createTable() {
    obj.name = inputName.value;
    obj.time = gameTimerP.textContent;
    stopTimer();

    console.log(obj);
    
    for(let keys in obj) {
        console.log(keys);
        let tr = document.createElement('tr');

        Object.values(obj) .forEach(element => {
            let td = document.createElement('td');
            td.textContent = element;
            tr.appendChild(td)
            console.log(element);
        });
        table.appendChild(tr);
    }
}


function stopTimer(){
    clearInterval(timerId);
    gameTimerP = ' ';
}


function game() {
    gameTimer()
}



function gameTimer() {
	timerId = setInterval(function() {
          date.setSeconds(date.getSeconds()+1);
		gameTimerP.textContent = addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
	}, 1000);


    function addZero(n){
        if (n<10){
          return '0'+n;
        } else {
          return ''+n;
        }
      }
}




