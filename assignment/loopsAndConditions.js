console.log("=============loops and conditions==========");
var evenArray = [];
function onlyEvens(array) {
  // complete this function so that given an array full of
  // numbers, it returns a new array containing only the even ones
  // for example `onlyEvens([1,2,3,4]) === [2,4]`
  // var myArray = [4,5,3,10];
  // console.log(myArray);

  for(var i =0; i< array.length+1; i++){
    if (array[i] % 2 === 0) {
        evenArray.push(array[i]);
      }
    }
  //check to see if the new evenArray is existed
  if (evenArray.length > 0) {
    console.log(evenArray);
  }
  else {
    console.log("no even numbers in the array");
  }

}

//onlyEvens([3,7,9,11,13]);
onlyEvens([2,4,7,9,12,15,17,18,22]);
console.log("-------------------------END-----------------------");
