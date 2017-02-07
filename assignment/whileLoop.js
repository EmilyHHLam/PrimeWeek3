console.log("=============While Loop=================");
function fillCrate( maxCapacity ){
  // this function received an argument of "maxCapacity"
  // crateMax is the maximum widget capacity of the crate
  // crates start empty
  var crateMax=false;
  var widgets = 0;

  // write a while loop that puts more widgets in the crate until it is full
  // return the number of widgets added to the crate in the while loop
  while(!crateMax){
    widgets++;
    console.log("widgets = " + widgets);
    if (widgets >= maxCapacity) { crateMax = true; }else { crateMax = false;}
  }
  console.log("The crate is having " + widgets + " widgets and it's met capacity");
} // end fillCrate

fillCrate(10);
console.log("-------------------------END-----------------------");
