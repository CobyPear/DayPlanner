// current day is displayed at top of calendar
// timeblocks for 9-5 are omnipresent
// timeblock is color coded: grey-past, red-present, green-future
// timeblocks are forms that allow the user to write text on them
// each timeblock has a save button on the right side that stores the form data into localStorage

/*
USE CASES:
    1) User adds text to timeblock
        a) user clicks the save button for that timeblock, expecting the content to be there next time the page is loaded
    2) user removes text from timeblock
        b) user clicks the save button for that timeblock, expecting the content removed to NOT be there next time the page is loaded
*/

// VARIABLEs

// current day
var today = $('#currentDay');
// set text of today to the current day and time
today.text(moment().format("[Today is] dddd[!] [the time is] h[:]mma"));

var storedTodos = JSON.parse(localStorage.getItem('Todo')) || {};

function buildRow(hour) {
    var NOW = moment(hour, "H");
    var baseClass = "future";
    var action = storedTodos[hour];

    if (moment().isSame(NOW, "hour")) {
        baseClass = "present";
    }
    else if (moment().isAfter(NOW)) {
        baseClass = "past";
    };

    // timeblock now holds a new div
    var timeblock = $("<div>");
    // add appropriate classes to timeblock
    timeblock.addClass('time-block row');
    timeblock.attr("data-hour", hour);
    // add appropriate text to timeblock

    var hourEl = $("<div>");
    hourEl.addClass('hour col-2');
    hourEl.text(NOW.format("hA"));

    // create an input form for each timeblock
    var todoForm = $("<textarea>");
    todoForm.addClass('description col-8 ' + baseClass);
    todoForm.val(action);

    // save button 
    var saveBtn = $("<button>").addClass('saveBtn col-2');
    var icon = $("<i>");
    icon.addClass("fas fa-save");
    saveBtn.append(icon);

    timeblock.append(hourEl, todoForm, saveBtn);

    // append timeblock to the container div
    $('.container').append(timeblock);
}
// function to populate the time blocks
function timeblockPopulator() {
    // for each hour between 9 and 5,
    for (let i = 9; i <= 17; i++) {
        buildRow(i);
    };
};

timeblockPopulator();

// EVENT LISTENERS
// Save button on click
 // when the button is pressed, save the data from the input box/form to local storage
$(".saveBtn").on('click', function () {
    
// select the textarea closest to the save button clicked
// set up our localstorage object
// get the text of the box next to the save button clicked
    var todo = $(this).parent();
    var hour = todo.attr('data-hour');
    var action = todo.find('textarea').val();

    storedTodos[hour] = action;

    localStorage.setItem('Todo', JSON.stringify(storedTodos));
});