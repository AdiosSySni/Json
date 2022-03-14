button = document.querySelector('#button')
ul = document.querySelector('#ul')
// Получение
// button.addEventListener('click', ()=> {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => json.filter(users => users.id % 2 == 0))
//     .then(json => json.filter((elem,index) => index== 0 || index <=20))
//     .then(json => {
//         json.forEach(json => {
//             let li = document.createElement('li')
//         li.appendChild(document.createTextNode(JSON.stringify(json.id))) 
//         ul.appendChild(li)
//         })
//     })
// })


let user = {
    name: 'John',
    surname: 'Smith'
}


// Отправка запроса
button.addEventListener('click', ()=> {
    let response =  fetch('https://jsonplaceholder.typicode.com/todos', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    // let result = response.json();
    // console.log(result)
    
})



// let user = {
//     name: 'John',
//     surname: 'Smith'
//   };
  
//   let response = fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
//   });
  
// //   let result = response.json();
// //   alert(result.message);
// console.log(response);





//1
// json.filter(users => users.id % 2 == 0)
//     .filter(users => users.titles.StartWith)

//2
// .filter((elem,index) => index == 0 || index <= 20)

//3
// json.forEach(element => {
//     let li = document.createElement('li')
//     li.appendChild(document.createTextNode(element.title)) ;
//     ul.appendChild(li)
// })


