const car = {
    make: "Honda", 
    model: "Pilot", 
    year: 2002, 
    color: "red", 

    turnOn() {
    console.log("The car turns on");

    }, 
    turnOff() {
    console.log("The car turns off"); 
    }, 
    crash() {
    console.log("Crashed in a intersection");     
    }, 
    towed() {
    console.log("Towed care to car shop");
    }, 
    paintTheCar(paint) {
    this.color = paint; 
    console.log(`The car is now ${this.color}.`); 
    }
}
car.turnOn(); 
car.turnOff(); 
car.crash(); 
car.towed(); 
car.paintTheCar("orange"); 


const foods = {
    breakfast: "pancake", 
    lunch: "sandwich", 
    bear() {
        console.log("grr")
    }, 
    cat: function() {
        console.log("Meowwww"); 
    },
    dog: () => {
        console.log("woof woof"); 
    }
}

foods.breakfast = "eggs benedict"; 
console.log(foods.breakfast); 
foods.brunch = "mimosas"; 


delete foods.lunch; 
console.log(foods); 


foods.moose = function() {
    console.log("I don't know what moose say."); 
}


const person = {
    name: "Anu", 
    age: 26, 
    greet() {
        console.log(`Hello my name ${this.name}.`);
    }, 
    yearsold: function() {
        console.log(`My age is ${this.age}`);
    }

}

person.greet(); 
person.yearsold(); 


let myArray = ["Anu", "Ganesh", "Kavitha", "Akhil"]; 

console.log(myArray); 

myArray[3] = "Ram"
console.log(myArray); 
 
myArray.push("Tejas"); 
console.log(myArray); 

myArray.push(); 
myArray.pop(); 
console.log(myArray); 

myArray.unshift("Bob"); 
console.log(myArray);  

let newArray = [1,2,3,4,5]; 
console.log(newArray); 
newArray.splice(2,1,30); 
console.log(newArray); d

let animals = ["alligator", "bear", "cougar", "dog"]; 
console.log(animals.includes("bear")); 


let yourArray = ["benjamins","washingtons", "jacksons", "lincolns" ]; 

console.log(yourArray.findIndex(function(bills) {
    return bills === "jacksons"; 
}))


let things = ["stapler", "speaker", "lavalamp"]; 

console.log(things.findIndex(function(thing){

    return thing === "lavalamp"; 
}))




let yet = [1,2,3,4,5,6,7,8,9,10]; 

console.log(   yet.filter(function(numbers){
    return numbers > 5; // 6,7,8,9,10
})  )




