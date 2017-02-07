
console.log("==============Logical Operator============");
var andTruthTable = [true  && true,
                     true  && false,
                     false && true,
                     false && false];

// in the array 'andTruthtable', how many elements are true?
// uncomment the next line and replace ___ with the appropriate value
var numberOfTrueElements = 1;



var orTruthTable = [true  || true,
                    true  || false,
                    false || true,
                    false || false];

// in the array 'orTruthTable', how many elements are false?
// uncomment the next line and replace ___ with the appropriate value
 var numberOfFalseElements = 3;


function opposite(booleanValue) {

  // complete this function so that it always returns the opposite of whatever value is passed in
  // for example `opposite(true) === false` and `opposite(false) === true`
  if (booleanValue) {
    return "false";
  }
    else
  {
    return "true";
  }
}
console.log("Opposite is " + opposite(true));
console.log("-------------------------END-----------------------");
