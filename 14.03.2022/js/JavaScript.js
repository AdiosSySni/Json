let inputName = document.querySelector('#inputName'),
startBtn = document.querySelector('#start'),
clickBtn = document.querySelector('#click'),
clearBtn = document.querySelector('#clear'),
table = document.querySelector('#table'),

gameTimerP = document.querySelector('#timer');
date = new Date(0,0,0,0,0,0,0);
// miliseconds = date.getMilliseconds(),
// seconds = date.getSeconds(),
// minutes = date.getMinutes();

let obj = new Object(),
timerId;

let arr = [];
let click = 0;



startBtn.disabled = true;
clickBtn.disabled = true;

inputName.addEventListener('blur', ()=> {
        if(inputName.value.length > 0) {
        startBtn.disabled = false
    }
    else {
        startBtn.disabled = true;
    }
})

startBtn.addEventListener('click', game) 
clearBtn.addEventListener('click', createTable)

function createTable() {
    stopTimer();
    obj.name = localStorage.getItem('Name');
    obj.time = localStorage.getItem('Timer');
    console.log(obj);

    arr.push(obj);
    let arr2 = JSON.stringify(arr);
    console.log(arr2);

    let arr3 = JSON.parse(arr2) 
    console.log(arr3);

    for(let key of arr3) {
        let tr = document.createElement('tr');
        let arr4 = Object.values(key)
        console.log(arr4);
    
        arr4.forEach(element => {
            let td = document.createElement('td');
            td.textContent = element;
            tr.appendChild(td)
            console.log(element);
        });
        table.appendChild(tr);
    }
  
    // startBtn.disabled = true;
    // clickBtn.disabled = true;
    // clearBtn.disabled = true;
}

function stopTimer(){
    clearInterval(timerId);
    localStorage.setItem('Timer', gameTimerP.textContent)
    gameTimerP.textContent = ' ';
}


function game() {
    localStorage.setItem('Name', inputName.value)
    clickBtn.disabled = false;
    // inputName.value = ' ';

    clickBtn.addEventListener('click', ()=> {
        click++;
        if(click==10) {
            startBtn.disabled = true;
            clickBtn.disabled = true;
            createTable()
            stopTimer();
            
        }

        console.log(click);
    })
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




