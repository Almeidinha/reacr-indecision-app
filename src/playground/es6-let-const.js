var nameVar = "marcos";
var nameVar = "marcos almeida";
console.log("nameVar: ", nameVar);

let nameLet = "Almeidinha";
nameLet = "almeida";
console.log("nameLet: ", nameLet);

const nameconst = "Aline";
console.log("nameconst: ", nameconst);

// block scoping

const fullName = "Jenn Madd";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);