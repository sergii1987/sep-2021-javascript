// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

    // function sRect(a, b) {
    //     let sRect = a * b;
    //     return sRect;
    // }
    //
    // console.log(sRect(10, 10))
    // document.write('Площа прямокутника' + sRect(10, 10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    // function sRaund(r) {
    // return Math.PI * Math.pow(r,2) ;
    // }
    // console.log(sRaund(10))
    // document.write('площа круга' + sRaund(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    // function sCylinder(r, h) {
    // return 2 * Math.PI * r * h;
    // }
    // console.log(sCylinder(50,50))
    // document.write('площа циліндра' + sCylinder(50, 50))

// - створити функцію яка приймає масив та виводить кожен його елемент

    // let arr = ['sergii','hello',11,04,1987,'com'];
    // function printArray (arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //        document.write(arr[i])
    //     }
    // }
    // printArray(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

//     function createP(text) {
//     document.write(`<p>${text}</p>`)
//     document.write(`<p>${text}</p>`)
//     for (let i = 0; i <= 5; i++) {
//     document.write(`<p>${i} - ${text}</p>`)
//     }
//
// }
//     createP('hello sergii')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    // function createUll(text) {
    //     document.write(`<ul>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`<li>${text}</li>`)
    //     document.write(`</ul>`)
    // }
    // createUll('hello segii');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    // function createUll(text, size) {
    //     document.write(`<ul>`)
    //     for (let i = 0; i < size; i++) {
    //         document.write(`<li>${text}</li>`);
    //     }
    //     document.write(`</ul>`)
    // }
    // createUll('hello sergii', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


    // function printArray2 (arr){
    //     document.write(`<ul>`)
    //         for (const  item of arr) {
    //             document.write(`<li>${item}</li>`);
    //         }
    //     document.write(`</ul>`);
    // }
    // printArray2([true,false,'sergii', 'world', 777,3.14]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

    // let ArrayofObjects = [{id: 1, name: 'sergii', age: 34}, {id: 2, name: 'andrii', age: 22}, {id: 3, name: 'oksana', age: 52}];
    // function objArray(arr) {
    //     for (const users of arr) {
    //         document.write(`<div>${users.id}.${users.name} - ${users.age}</div>`);
    //     }
    // }
    // objArray(ArrayofObjects);








