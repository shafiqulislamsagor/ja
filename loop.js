// for loops
const
cars = ["A","B","C","D","E","F"];

for(let i = 0 ; cars.length >= i; i++){
    console.log(i);
}

console.log("For loop done .")

let i = 0 ;

for(; ; i++){
    if(i <= 4){
        console.log(i);
    }
    else{
        break;
    }
}

console.log("i=0 and condition na dilew avhabe kora jai..")

// object loop kmne kore:

const person = {
    fname:"Sagor",
    lname:"Habiba",
    statusr:"Married"
}

for(let x in person){
    console.log(x) ;// fname,lname and statusr 

    // console.log j kono ekta k comment kore check korun:

    console.log(person[x]); //sagor , habiba and married
}

// number array ar jonno:

const numbers = [20,220,2,5,25,4,65,85];

for(let m in numbers){
    console.log(m);
    console.log(numbers[m]);
}

const s = "Habiba My Life..."

for(let m of s){ //"of holo array ar jonno and in holo object ar jonno"
    console.log(m);
}