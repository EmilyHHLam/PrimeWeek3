
console.log("==============Switch Default=============");
function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  today = today.toLowerCase();
  switch (today) {
    case 'monday':
        return false;
    case 'tuesday':
        return false;
    case 'wednesday':
        return false;
    case 'thursday':
        return false;
    case 'friday':
        return false;
    case 'saturday':
        return true;
    case 'sunday':
        return true;
    default:
        return 2;

  }
}
 // end checkDay
//var weekEnd = checkDay('urday');
var weekEnd = checkDay('sAturday');
if (weekEnd != 2) {
    if (weekEnd) {
      console.log("yes it is the weekend");
    }
    else {
      console.log("it isn't the weekend");
    }

}else {
  console.log("Not sure what day it is");
}

console.log("-------------------------END-----------------------");
