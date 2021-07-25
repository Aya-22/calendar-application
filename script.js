// date was added using moment
var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);


// var timeOfDay = moment().hour()
// $('.container').text(timeOfDay)

var inputEvent = $('.description');
var saveEvent = $('.saveBtn');
var save = true;
var hourEl = $('.hour');

// function will input the text in the area
function listedEvent (event) {
event.preventDefault(); //prevent default refreshing
var event = inputEvent.text('');

if (saveEvent) {
event.append();
}
}





// // TODO: Add an event listener to the `shoppingFormEl` to handle submission
saveEvent.on('click', listedEvent);

