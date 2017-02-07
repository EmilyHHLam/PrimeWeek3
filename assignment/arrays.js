// write an array named 'people' that holds the following names: 'Albert', 'Dev', 'Ryan', 'Antoinette'
// uncomment the following line and ______ with the appropriate code
console.log("==================Array=================");
var people = ['Albert', 'Dev', 'Ryan', 'Antoinette'];
console.log('array is ' + people);
// set the variable below equal to the first name in the array
// uncomment the following line and ______ with the appropriate code
var firstPerson = people[0];
console.log("first person in the array is " + firstPerson);
// set the variable below equal to the number of names in the array
// uncomment the following line and ______ with the appropriate code
var howManyPeople = people.length;
console.log("The number of the aray is " + howManyPeople);

// set the variable below equal to the last name in the array
// uncomment the following line and replace ______ with the appropriate code
var lastPerson = people[people.length-1];
console.log("The last person is " + lastPerson);
// write a line of code that adds 'Prince' to the array
people.push('Prince');
console.log('Array with one more persons is ' +people);
console.log("-------------------------END-----------------------");
