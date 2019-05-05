
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getAge(){
        return this.age;
    }
    getName() {
        return this.name;
    }
    getGreeting() {
        return `Hello ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = `Hi, I'm ${super.getName()}`
        if (!!this.homeLocation){
            greeting += ` I'm visitinng from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Person("Almeida", 34);
console.log(me.getDescription());

const other = new Student("Marcos Almeida", 34, "System Analyst.");
console.log(other.getDescription());
console.log(other.hasMajor());

const traveler = new Traveler("Aline Duarte.", 21, "Joinville SC - Brasil");
console.log(traveler.getGreeting());