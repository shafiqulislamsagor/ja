const couple = ["Habiba" , "Sagor" ,"Mohona" , "Rahim" ,"Akhi" , "Arif" , "Rima" , "Mubassir"];
for (i = 0 ; i < couple.length ; i++){
    console.log(i);
    console.log(typeof(i));
    console.log(couple[i]);
    console.log(typeof(couple[i]));
}
// array 
const some = ["name","age","year","class","roll"];
some.sort();
console.log(some);
some.reverse();
console.log(some);

// compare function:
const point = [103,1,5,7,8,4,50,40,20,80,65,100]
point.sort(
    function(a,b){
        return a - b 
    }
)

console.log(point)
// ans:   1,   4,  5,  7,  8, 20,  40, 50, 65, 80, 100, 103

const gpa = [1.22,5.00,1.58,4.50,3.22,4.00,3.50,3.77];
gpa.sort(
    function(a,b){
        return b - a 
    }
)

console.log(gpa);
//ans : 5, 4.5, 4, 3.77, 3.5, 3.22, 1.58, 1.22

console.log(gpa[0]);
console.log(gpa[gpa.length - 1]);

// ans: first and last number ber korar niyom....


const dif = [10,50,30,55,42,48,52,46,21];
dif.sort(
    function(a,b){
        return 0.5 -Math.random();
    }
)
console.log(dif);
// ans : random bhave sajano thakbe number gula....

// array itaration

const itarat = [50,25,15,82,18,55]
function myFunction (total,value,index,array){
    console.log(total);
    console.log("----------");
    return total + value;
}
const funtion = itarat.reduce(myFunction);

console.log(funtion);
// method reduce : a , b k jog kore....

const reduce_ = [20,30,40,50,60,70,80,90,100];
function funtn(tootal,vallue){
    return tootal + vallue;
}
const newReduce = reduce_.reduce(funtn,5)
console.log(newReduce);

// every method:

const host = [10,11,12,13,14,15];
function host_function(total,value,array){
    return value < 20;
}
const hoster = host.every(host_function);
console.log(hoster);


