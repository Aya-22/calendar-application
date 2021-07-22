// date was added using moment
function currentDate() {
var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);
}
// 

// var timeOfDay = moment().hour()
// $('.container').text(timeOfDay)

var inputEvent = $('#textArea');
var saveEvent = $('.saveBtn');
var save = true;

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function listedEvent (event){
event.preventDefault(); //prevent default refreshing
inputEvent.text('');

if (save)
console.log(inputEvent);
//   shoppingListEl.append('text);
}



// // TODO: Add an event listener to the `shoppingFormEl` to handle submission
saveEvent.on('click', listedEvent);

