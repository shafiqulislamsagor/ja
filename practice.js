//Practice-1: ludo khelai amra kivhabe 1 theke 6 sonkha rendomly print korte pari....

function getRandomNamber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

console.log(getRandomNamber(1,6));
//Answer:: random ans 1-6 ar modde..

//Practice-2: ki vhabe amra amader classer sokoler name alphabetically sajate pari ?

const students = ["Abdur","Zui","Doly","Habiba","Ema","Sagor"]

const studentsName = students.sort();
console.log(studentsName);
// Answer:: [ 'Abdur', 'Doly', 'Ema', 'Habiba', 'Sagor', 'Zui' ]

//Practice-3: Ki vhabe amra amader classer sokoler roll number crom onujayi sajate pari ?
const rollNumber = [1,52,25,42,32,41,35,26,22];

rollNumber.sort(
    function(a,b){
        return (a - b);
    }
)

console.log(rollNumber);
//Answer:: [ 1, 22, 25, 26, 32, 35, 41, 42, 52 ]

//Boro theke soto crom:
rollNumber.sort(
    function(a,b){
        return(b - a);
    }
)

console.log(rollNumber);
//Answer:: [ 52, 42, 41, 35, 32, 26, 25, 22, 1 ];