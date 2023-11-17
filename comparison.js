var x = 10 ;
var y = 20 ;
var z = 15 ;

if (x > y){
    console.log("x holo y ar theke boro");
}
console.log(" y boro");

let age = 19;
if (age >= 18){
    console.log("You are adult !")
} else {
    console.log("You are not adult !")
}
// console.log ar vitor condition lekhew kora jai true / false-- eta ternary oparator..
let adultAge = 18;

console.log(age >= 18 ? "You are Adults" : "You are not Adults");

// hard niyom:

let young = 28;
console.log(young <= 22 ? (young < 18 ) ? "You are child" : "You are adult" : "You are Young");
