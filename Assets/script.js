// VARIABLES
var now = moment();
var currentDay = now.format("dddd, MMMM Do");
var currentHour = now.format("hA");
const businessHours = {
  start: 9, // 9 AM
  end: 17, // 5 PM
};

// FUNCTIONS DEFINTIONS
function populateTimeBlocks() {
  for (var i = businessHours.start; i <= businessHours.end; i++) {
    
    console.log(moment(i, "H").format("hA"));
  }
}

// DOM MANIPULATION AND FUNCTION CALLS
$("#currentDay").text(currentDay);
populateTimeBlocks();

// EVENT LISTENERS

// LOGS
console.log(now);
console.log(currentDay);
console.log(currentHour);
var m = moment(9, "H").format("hA");
console.log(m);
