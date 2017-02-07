// remember! array indices start at 0
console.log("==========Array Index Consideration==========")
var colors = ['red', 'blue', 'yellow'];
console.log("array is = " + colors);
// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
// uncomment the next two lines and replace ____ with the appropriate code
var theColorRed = colors[0];
console.log(theColorRed);
var theColorYellow = colors[2];
console.log(theColorYellow);
// what happens if we access an index that has no element?
// uncomment the following line and replace ____ with the appropriate code
 var fortyThirdColor = colors[40];
console.log("There is no 43rd index, so it returns as " + fortyThirdColor);
function lastItem( array ) {
  // this function accepts an array as an argument
  // have it return the last item in the array
  console.log(array[array.length-1]);
  return array[array.length-1];
}
lastItem(colors);
console.log("-------------------------END-----------------------");
