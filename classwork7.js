//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let addCar = new Car(model, manufacturer, year, maxSpeed, volume);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(newSpeed);
addCar.changeYear(newValue);
addCar.addDriver(driver);


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

let addCarClass = new CarClass(model, manufacturer, year, maxSpeed, volume);
console.log(addCarClass);
addCarClass.drive();
addCarClass.info();
addCarClass.increaseMaxSpeed(newSpeed);
addCarClass.changeYear(newValue)
addCarClass.addDriver(driver)


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.footsize = size;
    }
}

let popelushkas = [
    new Popelushka('Popelushka1', 16, 30),
    new Popelushka('Popelushka2', 17, 31),
    new Popelushka('Popelushka3', 18, 30),
    new Popelushka('Popelushka4', 19, 31),
    new Popelushka('Popelushka5', 20, 33),
    new Popelushka('Popelushka6', 21, 29),
    new Popelushka('Popelushka7', 22, 34),
    new Popelushka('Popelushka8', 23, 33),
    new Popelushka('Popelushka9', 20, 34),
    new Popelushka('Popelushka10', 18, 32),
];
console.log(popelushkas);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const prince = new Prince('Prince', 28, 32);

//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const newlyweds = (popelushkas, prince) => {
    for (const popelushka of popelushkas) {
        if (item.size === prince.slipper) {
            return `Знайдена попелюшка: ${item.name}`
        }
    }
};
console.log(newlyweds(popelushkas, prince))

//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let futurePrincess = popelushkas.find((item) => item.size === prince.slipper);
console.log(futurePrincess);