
console.log("==================For Loop==============");

// var shoesOnTheBus = function(kidsOnTheBus){
//   // this function accepts the number of kids on the bus
//   // assume each kid on the bus is wearing 2 shoes
//   // write a for loop that counts how many shoes are on the bus
//   // this function should return the number of shoes on the bus

var i=0;

var shoesOnTheBus = function(kidsOnTheBus){
var total=0;
for(i=0;i<=kidsOnTheBus;i++){
    total=i*2;
}
return "Total of shoes is " + total;
};
console.log(shoesOnTheBus(40));
console.log("-------------------------END-----------------------");
