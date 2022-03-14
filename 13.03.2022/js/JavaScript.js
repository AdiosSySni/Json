// localStorage.setItem('key', 'hello') 

// let str = localStorage.getItem('key')
// console.log(str);

// let time = localStorage.getItem('time');

// if (!time) {
// 	let now = ( new Date() ).getTime();
// 	localStorage.setItem('time', now);
// }

// let timer = setInterval(()=> {
//     let date = new Date();
//     let h = addZero(date.getHours())
//     let m = addZero(date.getMinutes())
//     let s = addZero(date.getSeconds())

//     console.log(h+':'+m+':'+s);
// },1000)

// function addZero(num) {
//     if(num <=9) {
//         return '0' + num;
//     }
//     else {
//         return num;
//     }
// }

// let date = new Date();

// // let h = date.getHours();
// // let m = date.getMinutes();
// // let s = date.getSeconds();

// // let time = h+':'+m+':'+s
// // let time2 = h+ ' ' +m +' '+s;
// // console.log(time)
// // console.log(time2)

// let date1 = date.getTime();~








document.addEventListener('click', ()=> {
    let time1 = localStorage.getItem('time');
    let time2 = localStorage.getItem('time2');

    if (!time1) {
        let time1 = ( new Date() ).getTime();
        localStorage.setItem('time',time1);
    }
    else {
        let time2 = (new Date()).getTime();
        localStorage.setItem('time2', time2)
    }

    let time = ((time2-time1) / (1000*60).toFixed(2))
    localStorage.setItem('time', time2)
    console.log("Прошло" + time + "")
    console.log(time1,time2);
})