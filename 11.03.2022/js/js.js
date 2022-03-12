// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;

// arr.forEach(element => {
 
//     console.log(element)
//     sum += element;
// });
// console.log(sum)

// for(let i = 0; i < arr.length; i++) {
//     sum+=arr[i];
// }
// console.log(sum);
// console.log(arr);


// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;

// let obj = JSON.parse(json);
// let num = 0;

// console.log(obj);

// for(let key in obj) {
//     console.log(obj[key]);
//     num += obj[key].reduce((a,b) => a+b, 0) 
// }

// console.log(num);

// console.log(Object.values(JSON.parse(json)).forEach(item=>item.reduce((a,b)=> a+b,0)));

// let sum = Object.values(JSON.parse(json).flat().reduce((a,b)=> a+b,0))
// console.log(sum)

let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

let table = document.querySelector('#table')

let arr = JSON.parse(json);

console.log(arr);

for(let key of arr) {
    let tr = document.createElement('tr');
    let arr2 = Object.values(key)
    console.log(arr2);

    arr2.forEach(element => {
        let td = document.createElement('td');
        td.textContent = element;
        tr.appendChild(td)
        console.log(element);
    });
    table.appendChild(tr);

}










