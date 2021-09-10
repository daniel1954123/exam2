'use strict'

//
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         userId: 1
//     }),
// })
//     .then((ele)=> ele.json())
//     .then((json) => console.log(json))


//2
// const task2 = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((mou) => mou.json())
//         .then((fire) => {
//             console.log(fire)
//             const body = document.querySelector('body')
//             fire.forEach((elem)=>{
//                 const hr = document.createElement('hr')
//                 for(let key in elem){
//                     if(typeof elem[key] !== 'object'){
//                         const div = document.createElement('div')
//                         div.innerHTML = `${key} - ${elem[key]}`
//                         body.append(div)
//                     }
//                 }
//                 body.append(hr)
//             })
//         })
//         .catch((error) => console.log(error))
// }
//
// task2()


//Дана переменная isActivated = true. При успешном итоге вывести console.log('Активировано успешно!'),  при ошибке вывести
//console.log('Произошла ошибка при активации!'). В обоих случаях вывести ('Анализ окончен'). Реализовать через Promise.

// const isActivated = true
//
// const promise = new Promise((resolve, reject) => {
//     if (isActivated === true){
//         resolve('активировано успешно')
//     }else{
//         reject('произошла ошибка')
//     }
// });
// promise.then((message) =>{console.log(message)})
//    // .then((message) => console.log('Анализ закончен'))
//     .catch((message) => {console.log(message)})
//    .finally(() => console.log('Анализ окончен'))





