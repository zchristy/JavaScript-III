/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Is "this" called in the global scope or function?
* 2. Is "this" called with-in an Object method?
* 3. Is "this" called with-in a new Object binding?
* 4. Is "this" called with-in an Explicit Binding (call(), apply(), bind())?
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function example(sample) {
  console.log(this);
  return sample;
}

// Principle 2

// code example for Implicit Binding
const myObj = {
  name: "zach",
  student: "true",
  isStudent() {
    return `Is ${this.name} a student? .... ${this.student}`;
  }
}

console.log(myObj.isStudent());

// Principle 3

// code example for New Binding
function Vehicle(make, numWheels) {
  this.make = make;
  this.numWheels = numWheels;
  this.vroom = function() {
    return `Vroom! Vroom! Vroom! I am a ${this.make}, with ${this.numWheels} wheels!`;
  }
}

const truck = new Vehicle("Toyota", 4);
const motorcycle = new Vehicle("Ducati", 2);

console.log(truck.vroom());
console.log(motorcycle.vroom());

// Principle 4

// code example for Explicit Binding
console.log(truck.vroom.call(motorcycle));
console.log(motorcycle.vroom.call(truck));
