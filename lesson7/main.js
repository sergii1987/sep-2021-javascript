
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

    // function User(id, name, surname, email, phone) {
    //     this.id = id;
    //     this.name=name;
    //     this.surname=surname;
    //     this.email=email;
    //     this.phone=phone;
    // }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

    // let users = [
    //     new User(11, 'Sergii', 'Pukii', 'Sergii@gmail.com', '+308067544444'),
    //     new User(66, 'Johnny', 'Depp', 'JD@gmail.com', '+308098777777'),
    //     new User(88, 'Keanu', 'Reeves', 'KR@gmail.com', '+380976543219'),
    //     new User(44, 'Nicolas', 'Cage', 'NC@gmail.com', '+380678888888'),
    //     new User(77, 'Robert', 'Williams', 'RW@gmail.com', '+380975643217'),
    //     new User(33, 'Jean', 'Reno', 'JR@gmail.com', '+380674321877'),
    //     new User(99, 'Scarlett', 'Johansson', 'SJ@gmail.com', '+3897453276156'),
    //     new User(22, 'Ben', 'Affleck', 'BA@gmail.com', '+308067321678'),
    //     new User(55, 'Paul', 'McCartney', 'PM@gmail.com', '+308067762186'),
    //     new User(100, 'Freddie', 'Mercury', '   FM@gmail.com', '+308067761935'),
    // ];
    // console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    // let filteredUsers = users.filter(value => value.id % 2 === 0);
    // console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    // Users.sort((a, b) => a.id - b.id);
    // console.log(Users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

    // class Client {
    // constructor(id, name, surname, email, phone, order) {
    //     this.id = id;
    //     this.name = name;
    //     this.surname = surname;
    //     this.email = email;
    //     this.phone = phone;
    //     this.order = order;
    // }
}
// створити пустий масив, наповнити його 10 об'єктами Client

    // let clients = [
    //     new Client(11, 'Sergii', 'Pukii', 'Sergii@gmail.com', '+308067544444',['football games']),
    //     new Client(66, 'Johnny', 'Depp', 'JD@gmail.com', '+308098777777',['whiskey']),
    //     new Client(88, 'Keanu', 'Reeves', 'KR@gmail.com', '+380976543219',['shop']),
    //     new Client(44, 'Nicolas', 'Cage', 'NC@gmail.com', '+380678888888',['ps5']),
    //     new Client(77, 'Robert', 'Williams', 'RW@gmail.com', '+380975643217',['songs']),
    //     new Client(33, 'Jean', 'Reno', 'JR@gmail.com', '+380674321877',['car']),
    //     new Client(99, 'Scarlett', 'Johansson', 'SJ@gmail.com', '+3897453276156',['new dress']),
    //     new Client(22, 'Ben', 'Affleck', 'BA@gmail.com', '+308067321678',['shampoo']),
    //     new Client(55, 'Paul', 'McCartney', 'PM@gmail.com', '+308067762186',['guitar']),
    //     new Client(100, 'Freddie', 'Mercury', '   FM@gmail.com', '+308067761935',['eternal life']),
    // ];
    // console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    // let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
    // console.log(clients);




















