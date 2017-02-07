console.log("=============Boolean Condition============");
function isCartonFull( eggsInCarton, cartonCapacity ){
  // write an if statement checks if the carton is at cartonCapacity
  // this function should return true if so, false if not
  if (eggsInCarton >= 12){ cartonCapacity = true; } else {cartonCapcity =false;}
  if (cartonCapacity) {
    console.log("The egg carton contains " + eggsInCarton + " eggs and It's very full");
  }
  else {
    console.log("The egg carton contains " + eggsInCarton + " eggs and No, It isn't full yet");
  }
} // end checkIfCartonIsFull
isCartonFull(10);
console.log("-------------------------END-----------------------");
