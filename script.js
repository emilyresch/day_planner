//PSUEDO
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//when app is opened, today's date is displayed  (using moment) and appends under the header in #currentDay
//build calendar using table or bootstrap etc 
//calendar by hour is displayed, 9am to 5pm (standard business hours)
//past hours displayed in grey, current hour is red, future hours are green --this can be an if else statement using the current time
/////eg, if time is less than current time, grey. else if time is current to now, green. else time is green (something along those lines)
//user can click on the hour they want and type in an event --timeblocks willbe inputs
//user clicks on a save button to save their event - save button will need an onclick event listener which...
//their event is saved in local storage so that when page is refreshed, the events stay - localStorage;

///////// putting today's date on the jumbotron ///////////
var today = moment().toString();

var dateFormat = "MMMM DD, YYYY";
var timeFormat = "HH:mm";

var todayDate = moment().format(dateFormat);
var currentTime = moment().format(timeFormat);

console.log(todayDate);
console.log(currentTime);

//   console.log(nowNew);
$("#currentDay").text(todayDate);

//hours of the day on the calendar app
// var hours = ["9am", "10am"];



///////// change color of timeblock depending on the time of day //////////
// if () {
//   make current timeblock red = .present
// }
// else if (time is earlier than now){
//   make past timeblocks grey = .past
// } else {
//     make timeblocks green = .future
// }


///////// function to save user event text ///////////

$(".saveBtn").on("click", function (){
  var userInput = document.getElementById("time-block-input");

  // e.preventDefault();
  // var userEvent = $(this).val();
  var userEvent = userInput.value.trim(); //this doesnt work for some reason
  console.log(userEvent);

  window.localStorage.setItem("event", userEvent);
  //now need to connect to where it was typed on the page and do getItem("event");

});