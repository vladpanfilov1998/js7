//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}

//створити пустий масив, наповнити його 10 об'єктами new User(....)

const userArr = [
    new User(11, 'Ivan', 'Ivaniv', 'w000@i.ua', 30501111111),
    new User(13, 'Sergiy', 'Sergiiv', 'a123@i.ua', 30672222222),
    new User(16, 'John', 'Johniv', 'b123@i.ua', 30913333333),
    new User(19, 'Abram', 'Abramiv', 'c123@i.ua', 30504444444),
    new User(25, 'Nina', 'Niniv', 'd123@i.ua', 30665555555),
    new User(31, 'Abram', 'Isaakiv', 'e123@i.ua', 30676666666),
    new User(41, 'Isaak', 'Abramiv', 'y123@i.ua', 30507777777),
    new User(49, 'Nina', 'Niniv', 'f123@i.ua', 30668888888),
    new User(52, 'Levko', 'Isaakiv', 'h123@i.ua', 30679999999),
    new User(75, 'Fox', 'Abramiv', 'k123@i.ua', 30501011010)
];
console.log(userArr);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = userArr.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
});
console.log(filterUser);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUser = userArr.sort((a, b) => a.id - b.id);
console.log(sortUser)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//створити пустий масив, наповнити його 10 об'єктами Client

let newArray = [
    new Client(11, 'Ivan', 'Ivaniv', 'w000@i.ua', 30501111111, ['vegetables', 'mashrooms', 'nuts']),
    new Client(13, 'Sergiy', 'Sergiiv', 'a123@i.ua', 30672222222,['flowers', 'roses', 'nuts']),
    new Client(16, 'John', 'Johniv', 'b123@i.ua', 30913333333,['vegetables', 'books', 'nuts','choklad', 'flowers']),
    new Client(19, 'Abram', 'Abramiv', 'c123@i.ua', 30504444444,['meat', 'mashrooms', 'oil']),
    new Client(25, 'Nina', 'Niniv', 'd123@i.ua', 30665555555,['vegetables', 'mashrooms', 'nuts','choklad', 'books']),
    new Client(31, 'Abram', 'Isaakiv', 'e123@i.ua', 30676666666,['vegetables', 'oil', 'books']),
    new Client(41, 'Isaak', 'Abramiv', 'y123@i.ua', 30507777777,['trausers', 'choklad', 'books', 'oil']),
    new Client(49, 'Nina', 'Niniv', 'f123@i.ua', 30668888888,['fruits', 'mashrooms', 'nuts', 'vegetables']),
    new Client(52, 'Levko', 'Isaakiv', 'h123@i.ua', 30679999999,['vegetables', 'fruits', 'nuts']),
    new Client(75, 'Fox', 'Abramiv', 'k123@i.ua', 30501011010,['vegetables', 'books', 'nuts'])
];
console.log(newArray);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = newArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);