//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM D, YYYY"));

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeblockColor() {
    var hour = moment().hour();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        
        if (currentHour < hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }

        //if (currentHour < hour) {
            //$(this).removeClass("future");
            //$(this).removeClass("present");
            //$(this).addClass("past");
       //}
        //else if (currentHour === hour) {
            //$(this).removeClass("past");
            //$(this).removeClass("future");
            //$(this).addClass("present");
        //}
        //else {
            //$(this).removeClass("present");
            //$(this).removeClass("past");
            //$(this).addClass("future");
        //}
    })
};

timeblockColor ();

//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, event);
    });
});
