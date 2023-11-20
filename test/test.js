function time(){
    document.getElementById('is').innerHTML = Date();
}

// function k function arrow te use ..>
let hello = "";

hello = () => {
    return "Hello World";
}
document.getElementById("arrow").innerHTML = hello();
// arrow parts end..>
x = 5;

console.log(x);

var x;// var ar jonno hoisting hoi///

// object ar modde object thakle this use hoi:

const person = {
    firstName : "Shafiqul Islam",
    lastName : "Sagor",
    id : 220277 ,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person);
console.log(person.fullName());//object ar vitorer kono value k dekhar niyom;


