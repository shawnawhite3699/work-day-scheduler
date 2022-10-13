//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM D, YYYY"));
