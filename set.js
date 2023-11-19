const setNew = new Set(["a","b","c","d"]);

setNew.add("e");

console.log(setNew);

setNew.delete("a");

console.log(setNew);

// function forEach use:

const letters = new Set (["SAGOR"," + ","HABIBA"]);

let text = "";
letters.forEach(function(value){
    text += value;
})

console.log(text);


// similar forEach use:

const rltn = new Set(["I ","Love ","You ","Habiba"]);

let added = "";

rltn.forEach(function(value){
    added += value;
})

console.log(rltn);
console.log(added);

// itarator a for in / of use kora jai:
const simple = new Set(["aiuyt","b","c","d","e"]);

let logo = "";


for (let x of simple.values()){
    logo += x ;
}


console.log(logo);
