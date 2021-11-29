
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

    // function User(id, name, surname, email, phone) {
    //     this.id = id;
    //     this.name=name;
    //     this.surname=surname;
    //     this.email=email;
    //     this.phone=phone;
    // }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//     let users = [
//         new User(11, 'Sergii', 'Pukii', 'Sergii@gmail.com', '+308067544444'),
//         new User(66, 'Johnny', 'Depp', 'JD@gmail.com', '+308098777777'),
//         new User(88, 'Keanu', 'Reeves', 'KR@gmail.com', '+380976543219'),
//         new User(44, 'Nicolas', 'Cage', 'NC@gmail.com', '+380678888888'),
//         new User(77, 'Robert', 'Williams', 'RW@gmail.com', '+380975643217'),
//         new User(33, 'Jean', 'Reno', 'JR@gmail.com', '+380674321877'),
//         new User(99, 'Scarlett', 'Johansson', 'SJ@gmail.com', '+3897453276156'),
//         new User(22, 'Ben', 'Affleck', 'BA@gmail.com', '+308067321678'),
//         new User(55, 'Paul', 'McCartney', 'PM@gmail.com', '+308067762186'),
//         new User(100, 'Freddie', 'Mercury', '   FM@gmail.com', '+308067761935'),
//     ];
//     console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    // let filteredUser = users.filter((value) => {
    //     if (value.id % 2 === 0){
    //     return value
    //     }});
    // console.log(filteredUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    userArr.sort((a, b) => a.id - b.id);
    console.log(sortUser)

    // // 2 спосіб
    // console.log(userArr.sort((a, b) => a.id - b.id));
















