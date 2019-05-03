// argument object - no longer bound with arrow function

const add =  (a,b) => {
    //console.log(arguments); // throws error
    return a + b;
}

console.log(add(5,1));


// this keyword - no longer bound

const user = {
    name: "Mike",
    cities: ["Guarapuava", "Joinville"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());

// cc
const multiplier = {
    numbers: [10, 15, 20, 58, 99],
    multiplyBy: 10,
    multiplie() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiplie());