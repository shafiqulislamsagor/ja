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

//Practice-4: Kono year leap year kina ta ber korte pari ki vhabe ?
function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year ...!`);
    } else {
        console.log(`${year} is not a leap year ...!`);
    }
}

isLeapYear(2025);

function tryAgain(year){
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)
    console.log(`${year} is a leap year ...`);
    else 
    console.log(`${year} isn't a leap year ...!`);
}

tryAgain(2032);

//Practice-5: Kona sentence a kotogulo vowel ase ta nirnoy kora jai ki vhabe ?
const vowels = [ "A" , "a" , "e" , "E", "O", "o","i","I","u","U"]; // je gulo k count korte chai...!


// akti function create korte hobe...!
function countVowels(sentence){

    let count = 0 ; // count korar jonno variable..

    const letters = Array.from(sentence); // string k vange array create korar jonno Array.fron use korte hoi...!
    
    //loop kore jawyar jonno forEach use korte hoi...!
    letters.forEach(function(value,index,array){
        // loop kore jawyar somoi value ta ase kina ta dekhar jonno includes use kora hoi...! jodi thake tahole seta value te save hoi..!
        if(vowels.includes(value)){ 
            count++
        }
    });
    return count;
}

console.log(countVowels("Write error-free code with sophisticated editors. Whether you wish to beautify your code or want to practice what you learn, the Coding Ground is your go-to."))
// Answer:: 52

//Practice-6: Kono array theke dupkicates namber gulo ki vhabe ber kore ante pari ..?

const point = [1,2,4,5,1,7,8,2,3,6,7,9]

// protita number k call kore {filter}
const duplicate = point.filter(
    function(value,index,array){
        return array.indexOf(value) !== index // jodi 1st index ar value next index ar value ar sthe mile tahole take save koro...
    }
);

console.log(duplicate);

// kono array theke unique number gulo ki vhabe ber kore ante pari...?

const unique = point.filter(
    function(value,index,array){
        return array.indexOf(value) === index
    }
);

console.log(unique);