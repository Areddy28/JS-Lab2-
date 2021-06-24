"use strict"; 

// let Anu = {
//     name: "Anu", 
//     age: 26, 
//     city: "Rochester Hills"
// }; 

class Student {
    constructor(name, age, city){
        this.name = name; 
        this.age = age; 
        this.city = city; 
    }
    // any methods
}

let Anu = new Student("Anu", 26, "Rochester Hills"); 
console.log(Anu); 

let Matthew = new Student("Matthew", 90, "Philidelphia"); 
console.log(Matthew); 




class Person {
    constructor(name, age, weight) {
        this.name = name; 
        this.age = age; 
        this.weight = weight; 
    }
}

let Ganesh = new Person("Ganesh", 60, 185);
console.log(Ganesh); 



class Foods {
    constructor(name, color){
        this.name = name; 
        this.color = color; 
    }
    //any methods
    nameThatFood() {
        console.log(`The food is ${this.name}.`); 
    }
}

let ham = new Foods("ham", "pink"); 
console.log(ham); 

ham.nameThatFood(); 


let lettuce = new Foods("lettuce","green"); 
console.log(lettuce); 

lettuce.nameThatFood(); 



class Sports {
    constructor (team, player) {
        this.team = team; 
        this.player = player; 
    }
    nameThatSports() {
        console.log(`The Sports team is ${this.team}.`); 
    }
}

let pistons = new Sports ("pistons", "Blake Griffin"); 
console.log(pistons); 
pistons.nameThatSports(); 



debugger;  
for (let i = 1; i <11; i++) {
    console.log(i); 
}
//ES6 Exercise

class Room {
    constructor (name, length, width, capacity = 15) {
        this.roomName = name; 
        this.roomLength = length; 
        this.roomWidth = width; 
        this.available = true; 
        this.capacity = capacity; 
    }
    // methods go here
    getArea() {
        return this.length * this.width;   
    }
    getPerimeter() {
        return 2 * (this.length + this.width)
    }

}

let room1 = new Room("Sun", 30, 20); 
let room2 = new Room("Green", 15, 20, 18); 
console.log("room1's name:", room1.roomName); // "Sun" 
console.log("room1's name:", room1.roomLength); 
console.log("room1's name", room1.roomWidth);

console.log("room1's area:", room1.getArea()); 
console.log("room1's perimeter:", room1.getPerimeter()); 

console.log("room2's name:", room2.roomName);
console.log("room2's length:", room2.roomLength);
console.log("room2's width:", room2.roomWidth);

console.log("room2's area:", room2.getArea()); 
console.log("room2's perimeter:", room2.getPerimeter()); 

room2.available = false; 

console.log("room1's available", room1.available); 
console.log("room2's available", room2.available); 

console.log("room1's capacity", room1.capacity);
console.log("room2's capacity", room2.capacity);  
