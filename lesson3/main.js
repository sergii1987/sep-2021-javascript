// --створити масив з:
//     - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    // let text = ['hello', 'ua', 'world', 'com', 'okten'];
    // let numbers  = [2.7, 333, 666, -999, 777];
    // let all = [false, 'com', 3.14, true, 'okten'];
    // console.log(text);
    // console.log(numbers);
    // console.log(all);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    // let i = [];
    // i[0] = 'Srgii';
    // i[1] = 'Pukii';
    // i[2] = 'Yroslavovich';
    // i[3] = 1987;
    // console.log(i);
    // document.write(i);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
//     for (let i = 0; i < 11; i++) {
//         document.write(`<div>hello okten</div>`);
//     }
//
//     for (let i = 0; i < 11; i++) {
//         document.write(`<div>${i} hello world</div>`);
//     }
//
//     let i =0;
//     while(i<21){
//         document.write(`<div>hello okten</div>`);
//         i++;
//     }
//
//     let a =0;
//     while(a<21){
//         document.write(`<div>${a} okten school the best </div>`);
//         a++;
//     }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
//     let target = ['com', 'ua', 'false', 'true', 'okten', 'hello', 'js', 'school', 'world', 'best'];
//     for (i = 0; i < target.length; i++) {
//         console.log(target[i])
//     }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    // let target = [10,2.7,3.14,77,123,666,23,45,911,-999];
    // for (i = 0; i < target.length; i++) {
    //     console.log(target[i])
    // }
//
//
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
//     let target = [false, 'ua', 'hello', true, 'okten',2.7,-999,777,10,'world','best'];
//     for (i = 0; i < target.length; i++) {
//         console.log(target[i])
//     }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
//     let target = [false, 'ua', 'hello', true, 'okten',2.7,-999,777,10,'world','best'];
//     for (i = 0; i < target.length; i++) {
//         if (typeof target[i] =='boolean') {
//             console.log(target[i]);
//         }
//     }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
//     let target = [false, 'ua', 'hello', true, 'okten',2.7,-999,777,10,'world','best'];
//     for (i = 0; i < target.length; i++) {
//         if (typeof target[i] =='number') {
//             console.log(target[i]);
//         }
//     }
//
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
//     let target = [false, 'ua', 'hello', true, 'okten',2.7,-999,777,10,'world','best'];
//     for (i = 0; i < target.length; i++) {
//         if (typeof target[i] =='string') {
//             console.log(target[i]);
//         }
//     }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

    // let target = [];
    // target[0] = false;
    // target[1] = 'world';
    // target[2] = -999;
    // target[3] = 'js';
    // target[4] = 'ua';
    // target[5] = 'com';
    // target[6] = 123;
    // target[7] = 'hello';
    // target[8] = 'okten';
    // target[9] = true;
    //
    // for (let i = 0; i < target.length; i++) {
    //     console.log(target[i]);
    // }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    // for (let i = 0; i < 11; i++) {
    //     console.log('поточний крок циклу : ' + i + ' ');
    //     document.write('поточний крок циклу : ' + i + ' ');
    // }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    // for (let i = 0; i < 101; i++) {
    //     console.log('поточний крок циклу : ' + i + ' ');
    //     document.write('поточний крок циклу : ' + i + ' ');
    // }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    // for (let i = 0; i < 101; i+=2) {
    //     console.log('поточний крок циклу : ' + i + ' ');
    //     document.write('поточний крок циклу : ' + i + ' ');
    // }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    // for (let i = 0; i < 101; i++) {
    //     if(i % 2 ==0){
    //         console.log('поточний крок циклу : ' + i + ' ');
    //         document.write('поточний крок циклу : ' + i + ' ');
    //     }
    // }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//     for (let i = 0; i < 101; i++) {
//         if(i % 2 ==1){
//             console.log('поточний крок циклу : ' + i + ' ');
//             document.write('поточний крок циклу : ' + i + ' ');
//         }
//     }

