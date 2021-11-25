// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

    // let StringOne = 'hello world';
    // console.log(StringOne.length);
    //
    // let StringTwo = 'lorem ipsum';
    // console.log(StringTwo.length);
    //
    // let StringThree = 'javascript is cool';
    // console.log(StringThree.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

    // let StringOne = 'hello world';
    // let strOne = StringOne.toUpperCase();
    // console.log(strOne);
    //
    // let StringTwo = 'lorem ipsum';
    // let strTwo = StringTwo.toUpperCase();
    // console.log(strTwo);
    //
    // let StringThree = 'javascript is cool';
    // let strThree = StringThree.toLocaleUpperCase();
    // console.log(strThree);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    // let StringOne = 'HELLO WORLD';
    // let strOne = StringOne.toLowerCase();
    // console.log(strOne);
    //
    // let StringTwo = 'LOREM IPSUM';
    // let strTwo = StringTwo.toLowerCase();
    // console.log(strTwo);
    //
    // let StringThree = 'JAVASCRIPT IS COOL';
    // let strThree = StringThree.toLocaleLowerCase();
    // console.log(strThree);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

    // let dirtyString = ' dirty string   ';
    // let str = dirtyString.trim();
    // console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

    // function stringToarray(str) {
    //     return str.split(' ');
    // }
    // let str = 'Каждый охотник желает знать';
    // let arrayOfString = stringToarray(str);
    // console.log(arrayOfString);
    // document.writeln(arrayOfString);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

    // function delete_characters  (str, length) {
    //     return str.substring(0, length);
    // }
    // let str = 'Каждый охотник желает знать';
    // document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

    // function insert_dash (str) {
    //     return str.split(' ').join('-').toUpperCase();
    // }
    // let str = "HTML JavaScript PHP";
    // console.log(insert_dash(str));
    // document.write(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

    // function FirstLetterUp (str){
    //     return str[0].toUpperCase() + str.slice(1)
    // }
    // document.write(FirstLetterUp('hello sergii'));
    // console.log(FirstLetterUp('hello sergii'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//     function capitalize(str) {
//         let splitStr = str.toLowerCase().split(' ');
//         for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//         return splitStr.join(' ');
// }
//     console.log(capitalize('i study at okten school'));
//     document.write(capitalize('i study at okten school'));


















