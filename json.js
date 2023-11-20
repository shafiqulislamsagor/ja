let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text); // json k object korar niyom..

console.log(obj);

console.log(obj.employees[2].lastName); // eta akhn ekta obj..

// extra: object k json a jvhabe kore..

let person = {
    firstNames : "Shafiqul Islam",
    lastNames : "Sagor"
}

const jsons = JSON.stringify(person); // object theke json korar niyom ...

console.log(jsons);