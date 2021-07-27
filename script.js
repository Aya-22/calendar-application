// date was added using moment
var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

var inputEvent = $('.description');
var saveEvent = $('.saveBtn');
var time = $('.time-block')
var save = true;
var hourEl = $('.hour');

var str = moment().format('hh:mm a')
console.log(str);

$(document).ready(function(){
console.log('ready!')
});

//function will input the text in the area
function eventEntered (event) {
//prevent default refreshing
event.preventDefault(); 

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
var discreption = $('.discreption').val();

localStorage.setItem('discreption', discreption);

if (!discreption) {
    return;
}

inputEvent.textContent = discreption;
eventEntered();
}

function colorCode () {
// past, present, future color change on schedule
var str = moment().format('hh:mm a')
console.log(str);
if (str) {
hourEl.css('.present')    
} else if (str)
hourEl.css('.past')

}


// event listener to for saveItem on click
saveEvent.on('click', eventEntered);

