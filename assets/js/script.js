
// var dateShown = moment().format("dddd, MMMM Do YYYY, h:mm");
// setInterval(dateShown, 1000);

// $("#currentDay").text(dateShown);
// var m = moment();
// console.log(m.format("dddd, MMMM Do YYYY, h:mm"));

var dateShown = moment();
$("#currentDay").text(dateShown.format("dddd, MMMM Do YYYY, h:mm"));
setInterval(dateShown, 1000);
 console.log(dateShown);


// function momentDate() {
//     (moment().format("dddd, MMMM Do YYYY, h:mm")); 
// };
// setInterval(momentDate, 1000)
// console.log(momentDate);


// show current day at the top in this format: DoW, Month day


// time blocks for standard business hours = 9-17
// create single row and iterate through all 9 blocks
// each middle block needs to be an input field where the button is a save button
// save button needs to store text written in local storage (check to make sure it saved when refreshed)
// function for time block changing color depending on if it's in the past/present/future
