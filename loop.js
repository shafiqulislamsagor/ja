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
