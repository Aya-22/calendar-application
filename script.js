// date was added using moment
var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

var inputEvent = $('.description');
var saveEvent = $('.saveBtn');
var time = $('.time-block')
var save = true;
var hourEl = $('.hour');

$(document).ready(function(){
console.log('ready!')
});

//function will input the text in the area
function eventEntered (event) {
event.preventDefault(); //prevent default refreshing

// variable creates value in textbox in html
var saved = inputEvent.val();

// if event saved then a message will appear with message below
if (saved) {
 console.log('Your event has been saved')  
}

hourInput()

}
function hourInput () {
// local storage
var event = localStorage.getItem('Enter');

if (!event) {
    return;
}

inputEvent.textContent = event;
}


// function colorCode () {
// past, present, future color change on schedule
// if (hourEl === 09:00)


// }


// event listener to for saveItem on click
// saveEvent.on('click', saveItem);

