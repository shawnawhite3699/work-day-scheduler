//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, event);
    });

//WHEN I view the time blocks for that day
//THEN each time block is color coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour < hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

timeBlockColor();
var interval = setInterval(timeBlockColor, 15000);

//WHEN I refresh the page
//THEN the saved events persist
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM D, YYYY"));
});