class car {
    constructor(name,year){
        this.carName = name;
        this.carYear = year;
    }
}

const car1 = new car("Toyata",2017);
const car2 = new car("BMW",2020);
const car3 = new car("Suzuki",2023);

console.log(car1);
console.log(car2);
console.log(car3);


class personAll {
    constructor(name,age){
        this.personName= name;
        this.personAge = age;
    }
    play(stutas){
        console.log(`${this.personName} is playing carrom pool ${stutas}`);
    }
}

const person1 = new personAll("Sagor",18);
const person2 = new personAll("Habiba",17);

person1.play("Pro Player");
person2.play("Boot Player");