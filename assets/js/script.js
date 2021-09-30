var moment = moment();
var currentHour = moment.hour();
var saveBtn = $(".saveBtn");
var plannedEvent = $("#eventInput");
var userInput;
var localInput = localStorage.getItem("plannedEvent");
var keyName;


// show current day at the top in this format: DoW, Month day
$("#currentDay").text(moment.format("dddd, MMMM Do, YYYY"));

// store textarea text into local storage
$(".saveBtn").on("click", saveEvent);

function saveEvent(event) {  
    var userEvent = $(this).siblings("input").val();
    console.log(userEvent);
    var keyName = $(this).attr("id");
    console.log(keyName);
    localStorage.setItem(keyName, userEvent);
};


// function to retrieve date from local storage at refresh
// $("#9").siblings("input").val(localStorage.getItem("9"));

$(document).ready(function(){ 
    $("button").each(function(){
        for (var i = 9; i <= 17; i++){
        $("#"+i).siblings("input").val(localStorage.getItem(""+i))
        }
    })
});


console.log(currentHour);
console.log(typeof currentHour);
// in each timeblock, if the time (value which is given through data attributes) < hour { set class /attribute to .past, remove attribute .present .future}
// in each timeblock, if the time > dateShown {set attribute to .future, remove attribute .past .present}
// in each timeblock, if the moment h === dateshown hour {set attribute .present}
$("input").each(function(){
    var timeBlock = $(this).attr("name");
    console.log(timeBlock);
    if (timeBlock < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    } else if (timeBlock > currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    } else {
        $(this).removeClass('past');
        $(this).addClass('present');
        $(this).removeClass('future');
    }
});