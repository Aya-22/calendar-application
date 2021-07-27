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
var saved = $(this).parent().find('.description').first().val();
console.log(saved)
// if event saved then a message will appear with message below
// if (saved) {
//  console.log('Your event has been saved')  
// }

// hourInput()
localStorage.setItem('description', saved);

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
var currentHour = moment().hour()
console.log(currentHour);
var timeBlocks = $(".time-block")
for (var index = 0; index < timeBlocks.length; index++) {
    var element = $(timeBlocks[index]);
    var time = element.attr('data-time')
    console.log(element)
    console.log(time)
    if (currentHour === time) {
    timeBlocks.css('background-color', '#ff6961')
    } if (currentHour >= time) {
        timeBlocks.css('background-color', '#d3d3d3')
    } if (currentHour <= time) {
        timeBloacks.css('background-color', '#77dd77')
    }
    
}
// if (currentHour) {
// hourEl.css('.present')    
// } else if (str)
// hourEl.css('.past')

}
colorCode()


// event listener to for saveItem on click
saveEvent.on('click', eventEntered);

