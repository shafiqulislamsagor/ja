// 1st practice:
var firstName = "Shafiqul Islam" ;
var lastName = "Sagor" ;
var fullName = firstName + " " + lastName ;
console.log(fullName);

// 2nd practice:
var bazar = 50;
var total = "20";
var bazarTotal = bazar + total ;
console.log(bazarTotal);

// 3rd practice:
var point = "20" ;
var point2 = "50" ;
var pointTotal = point + point2;
console.log(pointTotal);

// 4th practice:
var point1 = parseInt(point)
console.log(point1)

// 5th practice:
var allItems = bazar + point1 ;
console.log(allItems);

// 6th practice :
carName ="volvo";
var carName;

console.log(carName)

// 7th practice:

let carNaMe;
carNaMe = "Hello";
console.log(carNaMe)

// 8th practice:
first = "Oppo";
second = "Realme";
third = "redme" ;
forth = "Poco"
let deviceName ={first:"Oppo",second:"Realme",third:"redmi",forth:"Poco"};
console.log(typeof deviceName);

// 9th practice:
x = 52 ;
y = 30 ;
z = 20 ;

let design = {x:52,y:30,z:20};
console.log(typeof x)

// function practice:
function sleep(name,time){
    var point = name + " " + "wake up at" + " " + time;
    console.log(point);
    return 5;
    console.log("this is return ar porer parts no support")
}
sleep("Sagor","10 am");
sleep("Mustakim","7 am")

function temper(a,b){
    return a * b
}
let gunfol = temper(5 , 10)
console.log(gunfol);

// Object practice:
const car = {
    name:"fiat",
    model:500,
    weight: "850kg",
    color: "white",
    start: function(){
        this.drive();
        console.log("car is started now.")
    },
    drive: function(){
        console.log("car is driving with me.")
    },
    stop: function(){
        return this.start() + console.log("It is success")
    }
};

console.log(car);
console.log(car.start);
car.start();
car.stop();





