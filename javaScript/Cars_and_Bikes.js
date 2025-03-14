function makeCar(name, wheelCount) {
   const car = Object.create(vehicle); // Create a new object with the vehicle object as its prototype
   car.name = name;
   car.type = "Car";
   car.wheelCount = wheelCount;

   // Additional methods specific to cars can be added here

   return car;
}

function makeBike(name, wheelCount) {
   const bike = Object.create(vehicle); // Create a new object with the vehicle object as its prototype
   bike.name = name;
   bike.type = "Bike";
   bike.wheelCount = wheelCount;

   // Additional methods specific to bikes can be added here

   return bike;
}

/***
 * 
 * Cars and Bikes
easy
Problem Statement
You are given an object vehicle which contains some hidden members and methods.

const vehicle = {

   name: "",

   type: "",

   wheelCount: "",

   // Some more members and methods

   ...
}

Your task is to complete the two functions -
1. makeCar() - It accepts two parameters name and wheelCount and returns an object with name, wheelCount, and type properties and inherits from the vehicle object. The type property must be set to "Car" (case-sensitive).

2. makeBike() - It accepts two parameters name and wheelCount and returns an object with name, wheelCount and type properties and inherits from the vehicle object. The type property must be set to "Bike" (case-sensitive).

Hint - Check __proto__
Input
1. The makeCar() function accepts two parameters - a string name and a number wheelCount of the car.

2. The makeBike() function accepts two parameters - a string name and a number wheelCount of the bike.
Output
1. The makeCar() function returns a car object that inherit from the vehicle object.

2. The makeBike() function returns a bike object that inherit from the vehicle object.
Example
Sample Input:
// makeCar() method
const name = "Nexon"
const wheelCount = 4
const myCar = makeCar(name, wheelCount)

// if makeCar is implemented properly and has methods of vehicle
// myCar object will have a method attached to it , which will print the string below on console
// Car named 'Nexon' is running with 4 wheels!

// makeBike() method
const name = "Pulsar"
const wheelCount = 2
const myBike = makeBike(name, wheelCount)
// if makeBike is implemented properly and has methods of vehicle
// myBike object will have a method attached to it , which will print the string below on console
// Bike named 'Pulsar' is running with 2 wheels!

 */
