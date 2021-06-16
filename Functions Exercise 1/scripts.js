"use strict"; 

function getAreaOfCircle (radius) {
    return 3.14 * radius **2; 
}

function getCircumferenceOfCircle (radius) {
    return (radius * 2) * 3.14;  

}

function getAreaOfSquare (side) {
       return (side **2);      
}

function getAreaOfTriangle (base, height) {
    return ((base * height)) /2; 
}

console.log(getAreaOfCircle (2))

console.log(getCircumferenceOfCircle (4)) 

console.log(getAreaOfSquare (5)) 

console.log(getAreaOfTriangle (20,4))
