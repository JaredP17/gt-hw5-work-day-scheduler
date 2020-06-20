// VARIABLES
var now = moment();
var currentDay = now.format("dddd, MMMM Do");
var currentHour = now.hour();
const businessHours = {
  start: 9, // 9 AM
  end: 17, // 5 PM
};
const timeStates = ["past", "present", "future"];
var container = $(".container");

// FUNCTIONS DEFINTIONS
function populateTimeBlocks() {
  for (var i = businessHours.start; i <= businessHours.end; i++) {
    var hour = moment(i, "H").format("hA");
    var state = "";
    if (i < currentHour) {
      state = timeStates[0];
    } else if (i === currentHour) {
      state = timeStates[1];
    } else {
      state = timeStates[2];
    }

    container.append(
      `<div class="row timeblock">
      <div class="col-1 hour">${hour}</div>
      <textarea class="col-10 description ${state}" id="${i}"></textarea>
      <button class="col-1 btn saveBtn"><i class="fas fa-save"></i></button>
      </div>`
    );
  }
}

// DOM MANIPULATION AND FUNCTION CALLS
$("#currentDay").text(currentDay);
populateTimeBlocks();

// EVENT LISTENERS

// LOGS
console.log(now);
console.log(currentDay);
console.log(typeof currentHour);
var m = moment(9, "H").format("hA");
console.log(m);
