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
saveBtn.on("click", saveEvent);

function saveEvent(event) {
    var clickBtn = $(event.target);
    console.log(clickBtn);
    var userEvent = clickBtn.siblings("input").val();
    console.log(userEvent);
    var keyName = $(event.target).attr("id");
    console.log(keyName);
    localStorage.setItem(keyName, userEvent);
};


// function to retrieve date from local storage at refresh
$("button").each(function(){
    var keyID = $(this).attr("id");
    console.log(keyID);
    console.log(typeof keyID);
    var storedEvent = localStorage.getItem(keyID);
    console.log(storedEvent);
        if(storedEvent) {
            $("#"+keyID).each(function(){
                plannedEvent.val(storedEvent)
            });
        }
})






// var keyID = $("row").children().eq(3).attr("id");
// console.log(keyID);
// var fromLocal = localStorage.getItem(10);
// console.log(fromLocal);
// $(function(){ 
//     $("button").each(function() {
//         var id = $(this).attr("id");
//         console.log(id);
//         if (keyID == id) {
//         plannedEvent.text = localStorage.getItem(keyID)
//         }
//     });
// });

// $(document).ready(function(){

// })
// function ()
// if (this.find("id").val()




// this.timblock.child.child(textarea).value has a atext, then run function onload
// else textconent = ""
// if there is data in local storage

// var currentTime = moment();
// var time = function(){
//     currentTime.format("h:mm")};
// setInterval(time, 60000);
// console.log("current time" + currentTime);


// var timesHour = function(){
//     currentHour.hour()};
// setInterval(currentHour, 1000*60*60);
// console.log("current hour" + currentHour);
console.log(currentHour);
console.log(typeof currentHour);

// time blocks for standard business hours = 9-17


// way to call the value in the id of each time
// event.target.$("id")

// each middle block needs to be an input/textarea field where the button is a save button
// save button needs to store text written in local storage (check to make sure it saved when refreshed)
// function for time block changing color depending on if it's in the past/present/future


// in each timeblock, if the time (value which is given through data attributes) < hour { set class /attribute to .past, remove attribute .present .future}
// in each timeblock, if the time > dateShown {set attribute to .future, remove attribute .past .present}
// in each timeblock, if the moment h === dateshown hour {set attribute .present}



// save button - on click grab text from textarea and store locally.
// in each text area linked to its time block, the text content needs to load the locally stored value for whatever time block its stored in, use id's as keys of the value


// setInterval needs a function passed in order to work

