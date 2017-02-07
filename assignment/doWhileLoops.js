console.log("===============DoWhileLoop==============");

var count = 0;

var valueofCountAfterLoop = function(number) {
  do {
    count++;
    console.log("It is " + count);

  } while (count<number);

console.log("The value count after loop is " + number);
};
// uncomment the following line and replace ___ with the correct value
//console.log(valueofCountAfterLoop());
valueofCountAfterLoop(6);

console.log("-------------------------END-----------------------");
